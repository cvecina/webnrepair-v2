export function getFoto(fileId) {

    let fotoDef =
        "https://" + import.meta.env.VITE_NHOST_SUBDOMAIN + ".storage.eu-central-1.nhost.run/v1/files/" +
        fileId;
    return fotoDef;
}
