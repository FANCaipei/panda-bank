import Request from "./request"

const ex1Request = () => {
    return Request.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3|9|12');
}

export { ex1Request };