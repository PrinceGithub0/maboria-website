import { NextRequest } from "next/server";
import { ServiceRequestController } from "@/controllers/serviceRequestController";
import { requireAuth } from "@/lib/auth";
import { ok, handleError } from "@/lib/apiResponse";
import { serviceUpdateSchema } from "@/validators/service";

type Params = { params: { id: string } };

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const user = requireAuth(req);
    const service = await ServiceRequestController.get(params.id, user.userId, user.role);
    return ok(service);
  } catch (err) {
    return handleError(err);
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const user = requireAuth(req);
    const body = await req.json();
    const parsed = serviceUpdateSchema.parse(body);
    const service = await ServiceRequestController.update(params.id, user.userId, user.role, parsed);
    return ok(service);
  } catch (err) {
    return handleError(err);
  }
}
