import "server-only";

export function logError(message: string) {
  if (process.env.NODE_ENV !== "production") {
    console.error(message);
  }
}

export function logInfo(message: string) {
  if (process.env.NODE_ENV !== "production") {
    console.info(message);
  }
}
