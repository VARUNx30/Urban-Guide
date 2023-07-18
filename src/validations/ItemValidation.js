async function ItemValidation(data) {
  const errors = [];

  if (!data.name) {
    errors.push("Name is required");

    return errors;
  }

  if (!data.price) {
    errors.push("Price is required");

    return errors;
  }

  if (!data.type) {
    errors.push("Type is required");

    return errors;
  }

  if (!data.description) {
    errors.push("Description is required");

    return errors;
  }

  if (!data.image) {
    errors.push("Image is required");

    return errors;
  }

  if (!data.rating) {
    errors.push("Rating is required");

    return errors;
  }

  if (!data.location) {
    errors.push("Location is required");

    return errors;
  }

  return errors;
}

export default ItemValidation;
