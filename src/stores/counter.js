import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/data.json'

export const useProductStore = defineStore({
  id: "myStore",
  state: () => ({
    items: [
      {
        id: 1,
        seria: "WRN2648368123",
        name: "waec",
        pin: "12242325234534",
      },

      {
        id: 2,
        seria: "WRN2648368123",
        name: "waec",
        pin: "34242325234534",
      },

      {
        id: 3,
        seria: "WRN2648368123",
        name: "waec",
        pin: "74242325234534",
      },

      {
        id: 4,
        seria: "WRN2648468123",
        name: "Waec",
        pin: "56245325234534",
      },

      {
        id: 5,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "34242325234534",
      },

      {
        id: 6,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "12242325234554",
      },

      {
        id: 7,
        seria: "WRN2648368123",
        name: "Waec",
        pin: "12242325234534",
      },

      {
        id: 8,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 9,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 7,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },
      {
        id: 8,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },

      {
        id: 9,
        seria: "WRN2648368123",
        name: "Neco",
        pin: "12242325234534",
      },
    ],
  }),
});
