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
  },
  fetchAllCars: async () => {
    const res = await fetch('/api/cars');
    const data = await res.json();
    set({ cars: data.data });
  },
  deleteCar: async (id) => {
    const res = await fetch(`/api/cars/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();

    if (!data.success) return { success: false, message: data.message }
    set(state => ({ cars: state.cars.filter(car => car._id !== id) }));
    return {
      success: true,
      message: data.message
    };
  }
}));