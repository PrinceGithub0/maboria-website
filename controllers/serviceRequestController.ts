import "server-only";
import {
  createServiceRequest,
  getServiceRequest,
  listServiceRequests,
  updateServiceRequest,
} from "@/services/serviceRequestService";

export const ServiceRequestController = {
  list: listServiceRequests,
  create: createServiceRequest,
  get: getServiceRequest,
  update: updateServiceRequest,
};
