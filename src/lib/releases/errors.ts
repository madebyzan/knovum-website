/** The latest release cannot be shown as published: it could not be read, or it is incomplete. */
export class ReleaseError extends Error {
  override readonly name = "ReleaseError";
}
