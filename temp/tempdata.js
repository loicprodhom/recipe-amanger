export const ingredients = [
  {
    name: "Garlic",
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/311"
      },
      ingredient: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/311"
      },
      recipes: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/311/recipes"
      }
    }
  },
  {
    name: "Salt",
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/312"
      },
      ingredient: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/312"
      },
      recipes: {
        href: "http://prodhom-megusta.herokuapp.com/api/ingredients/312/recipes"
      }
    }
  }
];

export const recipes = [
  {
    name: "Pesto Pasta",
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/330"
      },
      recipe: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/330"
      },
      ingredients: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/330/ingredients"
      },
      //Added from model
      containses: [
        {
          quantity: 6.0,
          //added from model
          ingredient: "Pesto",
          unit: "tsp",
          _links: {
            self: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/331"
            },
            contains: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/331"
            },
            recipe: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/recipe"
            },
            ingredient: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/ingredient"
            },
            unit: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/unit"
            }
          }
        },
        {
          quantity: 500.0,
          //added from model
          ingredient: "Pasta",
          unit: "g",
          _links: {
            self: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/332"
            },
            contains: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/332"
            },
            recipe: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/recipe"
            },
            ingredient: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/ingredient"
            },
            unit: {
              href:
                "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/unit"
            }
          }
        }
      ]
    }
  } /*,
  {
    name: "Spaghetti alla Carbonara",
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/333"
      },
      recipe: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/333"
      },
      ingredients: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipes/333/ingredients"
      }
    }
  }*/
];

export const recipecontents = [
  {
    quantity: 6.0,
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/331"
      },
      contains: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/331"
      },
      recipe: {
        href:
          "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/recipe"
      },
      ingredient: {
        href:
          "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/ingredient"
      },
      unit: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/331/unit"
      }
    }
  },
  {
    quantity: 500.0,
    _links: {
      self: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/332"
      },
      contains: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/332"
      },
      recipe: {
        href:
          "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/recipe"
      },
      ingredient: {
        href:
          "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/ingredient"
      },
      unit: {
        href: "http://prodhom-megusta.herokuapp.com/api/recipecontents/332/unit"
      }
    }
  }
];
