import { create } from 'zustand';

export const useCarStore = create(set => ({
  cars: [],
  setCars: (cars) => set({ cars }),
  addCar: async (newCar) => {
    for (let key in newCar) {
      if (!newCar[key]) {
        return {
          success: false,
          message: "All fields must be filled"
        }
      }
    }

    const res = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCar)
    });
    const data = await res.json();
    set(state => ({ cars: [...state.cars, data.data] }))
    return {
      success: true,
      message: "A new car added"
    }
  }
}));