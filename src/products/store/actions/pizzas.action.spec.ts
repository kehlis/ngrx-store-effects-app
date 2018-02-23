import * as fromPizzas from './pizzas.action';

describe('Pizzas Actions', () => {

    describe('LoadPizzas Actions', () => {
        describe('LoadPizzas', () => {
            it('should create an action', () => {
                const action = new fromPizzas.LoadPizzas();

                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS
                })
            })
        })

        describe('LoadPizzasSuccess', () => {
            it('should create an action', () => {
                const payload = { message: 'Load Error ' };
                const action = new fromPizzas.LoadPizzasFail(payload);

                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_FAIL,
                    payload // ES6 we can loead out ': payload'
                })
            })
        })

        describe('LoadPizzasSuccess', () => {
            it('should create an action', () => {
                const payload = [{
                    "name": "Blazin' Inferno",
                    "toppings": [
                      {
                        "id": 10,
                        "name": "pepperoni"
                      },
                      {
                        "id": 9,
                        "name": "pepper"
                      },
                      {
                        "id": 3,
                        "name": "basil"
                      },
                      {
                        "id": 4,
                        "name": "chili"
                      },
                      {
                        "id": 7,
                        "name": "olive"
                      },
                      {
                        "id": 2,
                        "name": "bacon"
                      },
                      {
                        "id": 6,
                        "name": "mushroom"
                      }
                    ],
                    "id": 1
                  },
                  {
                    "name": "Plain Ol' Pepperoni",
                    "toppings": [
                      {
                        "id": 10,
                        "name": "pepperoni"
                      }
                    ],
                    "id": 3
                  }];
                const action = new fromPizzas.LoadPizzasSuccess(payload);

                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_SUCCESS,
                    payload
                })
            })
        })

    });

});
