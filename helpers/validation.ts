import {
  childErrors,
  ChildErrorsType,
  childrenContentType,
  childrenErrors,
  ChildrenErrorsType,
  childrenPartialContentType,
  parentContent,
  parentErrors,
  parentErrorsContent,
} from 'alltypes';

export const rules = {
  lettersString: /^[A-z0-9-À-ÿ- ]{2,15}$/,
  email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  date: /(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?((\d{2})?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/g,
  password: /^.{4,}$/,
};

export function checkParentInfosValidity(
  parentContent: parentContent,
): parentErrors {
  const newParentErrors: parentErrors = {
    hasError: false,
    errors: {
      name: null,
      firstName: null,
      phone: null,
      email: null,
      secondaryEmail: null,
      password: null,
      repeatPassword: null,
    },
  };

  if (!parentContent.name.match(rules.lettersString)) {
    newParentErrors.errors.name =
      'Doit-être composé de lettres uniquement, ex : Michel';
  } else {
    newParentErrors.errors.name = null;
  }

  if (!parentContent.firstName.match(rules.lettersString)) {
    newParentErrors.errors.firstName =
      "Doit-être composé de lettres uniquement, ex : Michel'";
  } else {
    newParentErrors.errors.firstName = null;
  }

  if (!parentContent.email.match(rules.email)) {
    newParentErrors.errors.email =
      "Doit-être un email valide, ex : 'email@email.com'";
  } else {
    newParentErrors.errors.email = null;
  }

  if (!parentContent.phone.match(rules.phone)) {
    newParentErrors.errors.phone =
      "Doit-être un numéro de gsm valide, ex : '0488 67 67 56'";
  } else {
    newParentErrors.errors.phone = null;
  }

  if (
    parentContent.secondaryEmail != '' &&
    !parentContent.secondaryEmail.match(rules.email)
  ) {
    newParentErrors.errors.secondaryEmail =
      "Doit-être un email valide, ex : 'email@email.com'";
  } else {
    newParentErrors.errors.secondaryEmail = null;
  }

  if (!parentContent.password.match(rules.password)) {
    newParentErrors.errors.password =
      'Doit être composé de 4 charachtères minimum.';
  } else {
    newParentErrors.errors.password = null;
  }

  if (parentContent.password !== parentContent.repeatPassword) {
    newParentErrors.errors.repeatPassword =
      'Les mots de passes de correspondent pas.';
  } else {
    newParentErrors.errors.repeatPassword = null;
  }

  let key: keyof parentErrorsContent;
  for (key in newParentErrors.errors) {
    if (newParentErrors.errors[key] != null) {
      newParentErrors.hasError = true;
      break;
    }
  }

  return newParentErrors;
}

export function checkParentUpdateInfosValidity(
  parentContent: parentContent,
): parentErrors {
  const newParentErrors: parentErrors = {
    hasError: false,
    errors: {
      name: null,
      firstName: null,
      phone: null,
      email: null,
      secondaryEmail: null,
      password: null,
      repeatPassword: null,
    },
  };

  if (!parentContent.name.match(rules.lettersString)) {
    newParentErrors.errors.name =
      'Doit-être composé de lettres uniquement, ex : Michel';
  } else {
    newParentErrors.errors.name = null;
  }

  if (!parentContent.firstName.match(rules.lettersString)) {
    newParentErrors.errors.firstName =
      'Doit-être composé de lettres uniquement, ex : Michel';
  } else {
    newParentErrors.errors.firstName = null;
  }

  if (!parentContent.email.match(rules.email)) {
    newParentErrors.errors.email =
      "Doit-être un email valide, ex : 'email@email.com'";
  } else {
    newParentErrors.errors.email = null;
  }

  if (!parentContent.phone.match(rules.phone)) {
    newParentErrors.errors.phone =
      "Doit-être un numéro de gsm valide, ex : '0488 67 67 56'";
  } else {
    newParentErrors.errors.phone = null;
  }

  if (
    parentContent.secondaryEmail != '' &&
    !parentContent.secondaryEmail.match(rules.email)
  ) {
    newParentErrors.errors.secondaryEmail =
      "Doit-être un email valide, ex : 'email@email.com'";
  } else {
    newParentErrors.errors.secondaryEmail = null;
  }

  if (parentContent.password && !parentContent.password.match(rules.password)) {
    newParentErrors.errors.password =
      'Doit être composé de 4 charachtères minimum.';
  } else {
    newParentErrors.errors.password = null;
  }

  if (
    parentContent.password &&
    parentContent.password !== parentContent.repeatPassword
  ) {
    newParentErrors.errors.repeatPassword =
      'Les mots de passes de correspondent pas.';
  } else {
    newParentErrors.errors.repeatPassword = null;
  }

  let key: keyof parentErrorsContent;
  for (key in newParentErrors.errors) {
    if (newParentErrors.errors[key] != null) {
      newParentErrors.hasError = true;
      break;
    }
  }

  return newParentErrors;
}

const makeDateFromString = (str: string): Date => {
  const strSplit = str.replace('/', '-');
  return new Date(strSplit);
};

export function checkChildrenValidity(
  childrenContent: childrenContentType,
): childrenErrors {
  const newChildrenErrors: childrenErrors = { hasError: false, errors: [] };

  childrenContent.forEach((_, index) => {
    newChildrenErrors.errors.push({
      name: null,
      first_name: null,
      birth_date: null,
      course_id: null,
    });

    if (!childrenContent[index].name.match(rules.lettersString)) {
      newChildrenErrors.errors[index].name =
        'Doit-être composé de lettres uniquement, ex : "Michel"';
    } else {
      newChildrenErrors.errors[index].name = null;
    }
    if (!childrenContent[index].first_name.match(rules.lettersString)) {
      newChildrenErrors.errors[index].first_name =
        'Doit-être composé de lettres uniquement, ex : "Michel"';
    } else {
      newChildrenErrors.errors[index].first_name = null;
    }
    if (!childrenContent[index].birth_date.match(rules.date)) {
      newChildrenErrors.errors[index].birth_date =
        'Doit-être une date avalide ex : "01/03/2013" ';
    } else if (
      Date.parse(`${makeDateFromString(childrenContent[index].birth_date)}`) <
      new Date().setMonth(-216)
    ) {
      newChildrenErrors.errors[index].birth_date =
        'Votre enfant doit être âgé entre 6 et 18 ans';
    } else if (
      Date.parse(`${makeDateFromString(childrenContent[index].birth_date)}`) >
      new Date().setMonth(-72)
    ) {
      newChildrenErrors.errors[index].birth_date =
        'Votre enfant doit être âgé entre 6 et 18 ans';
    } else {
      newChildrenErrors.errors[index].birth_date = null;
    }
    if (
      typeof childrenContent[index].course_id !== 'number' ||
      childrenContent[index].course_id == 9999999
    ) {
      newChildrenErrors.errors[index].course_id =
        'Veuillez sélectionner un cours.';
    } else {
      newChildrenErrors.errors[index].course_id = null;
    }
  });

  let key: keyof ChildrenErrorsType;
  newChildrenErrors.errors.forEach(error => {
    for (key in error) {
      if (error[key] != null) {
        newChildrenErrors.hasError = true;
        break;
      }
    }
  });

  return newChildrenErrors;
}

export function checkChildValidity(
  childrenContent: childrenPartialContentType,
): childErrors {
  const newChildrenErrors: childErrors = {
    hasError: false,
    errors: {
      name: null,
      first_name: null,
      birth_date: null,
    },
  };

  //Check for fields validity
  if (!childrenContent.name.match(rules.lettersString)) {
    newChildrenErrors.errors.name =
      'Doit-être composé de lettres uniquement, ex : "Michel"';
  } else {
    newChildrenErrors.errors.name = null;
  }
  if (!childrenContent.first_name.match(rules.lettersString)) {
    newChildrenErrors.errors.first_name =
      'Doit-être composé de lettres uniquement, ex : "Michel"';
  } else {
    newChildrenErrors.errors.first_name = null;
  }
  if (!childrenContent.birth_date.match(rules.date)) {
    newChildrenErrors.errors.birth_date =
      'Doit-être une date avalide ex : "01/03/2013" ';
  } else {
    newChildrenErrors.errors.birth_date = null;
  }

  let key: keyof ChildErrorsType;

  for (key in newChildrenErrors.errors) {
    if (newChildrenErrors.errors[key] != null) {
      newChildrenErrors.hasError = true;
      break;
    }
  }

  return newChildrenErrors;
}

export type errorsType = {
  email: string | null;
  password: string | null;
};

export type credentialsType = {
  email: string | null;
  password: string | null;
};

export function checkCredentialsValidity(
  credentials: credentialsType,
  errors: errorsType,
): errorsType {
  if (!credentials.email || !credentials?.email.match(rules.email)) {
    errors.email = "Doit-être un email valide, ex : 'email@email.com'";
  } else {
    errors.email = null;
  }

  if (!credentials.password) {
    errors.password = 'Ne peut pas être vide.';
  } else {
    errors.password = null;
  }
  return errors;
}
