
// Helper ---------------------------------------------------------------------
const removeEmptyErrors = errors => {
    let cleanErrors = {...errors}
    Object.keys(cleanErrors).forEach(
        key => cleanErrors[key] == null && delete cleanErrors[key]
    )
    return cleanErrors
}

export const isRequired = value => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export default isRequired

//-----------------------------------------------------------------------------

export const validateForm = values => {
  let errors = {
    sponsor_note: isRequired(values.sponsor_note),
    medical_note: isRequired(values.medical_note),
    dental_note: isRequired(values.dental_note),
    vision_note: isRequired(values.vision_note),
    other_note: isRequired(values.other_note),
  };
  // remove empty errors
  errors = removeEmptyErrors(errors)
  return errors;
};
