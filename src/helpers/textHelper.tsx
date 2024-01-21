export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export type pixelPet = "cat" | "dog" | "turtle";

export const doesPetLikeFood = (pet: pixelPet, foodOption: string) => {
  // Define a mapping of foods that each pet likes
  const petFoodPreferences: Record<pixelPet, string[]> = {
    cat: ["option1", "option2", "option3", "option4"],
    dog: ["option1", "option2", "option3", "option4"],
    turtle: ["option5", "option6", "option7", "option8"],
  };

  // Check if the given food is in the list of liked foods for the pet
  return petFoodPreferences[pet]?.includes(foodOption) || false;
};
