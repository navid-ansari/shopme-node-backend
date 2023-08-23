const Errors = {
  PRODUCT_DETAILS: {
    PRODUCT_NOT_FOUND: {
      message: {
        type: 'string',
        description: 'error message if product is not found'
      }
    },
    PRODUCT_NOT_FOUND_EXAMPLE: {
      message: 'Product not found'
    }
  },
  SIGN_UP: {
    USERNAME_EXISTS: {
      message: {
        type: 'string',
        description: 'username already taken'
      },
      usernameExist: {
        type: 'boolean',
        description: 'flag true if username already taken'
      }
    },
    USERNAME_EXISTS_EXAMPLE: {
      message: 'username already taken',
      usernameExist: true
    },
    EMAIL_EXISTS: {
      message: {
        type: 'string',
        description:
          'respond with this message if email id has already been taken by some user'
      },
      emailExist: {
        type: 'boolean',
        description: 'flag to indicate that email id already taken by some user'
      }
    },
    EMAIL_EXISTS_EXAMPLE: {
      message: 'email id already exist',
      emailExist: true
    }
  },
  SIGN_IN: {
    INCORRECT_PASSWORD: {
      message: {
        type: 'string',
        description: 'Password is incorrect'
      }
    },
    INCORRECT_PASSWORD_EXAMPLE: {
      message: 'Password is incorrect'
    }
  }
}

export { Errors }
