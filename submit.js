//submit
const submitForm = (event) => {

    // picking the event info instance -the form entries-
    const formData = new FormData(event.target);

    // transforming the form entries into an object
    const formInfo = Object.fromEntries(formData);

    console.log(formInfo.name)
    return false;
}