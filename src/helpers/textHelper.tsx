import { Egg } from "../components/SelectEgg";

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

export const getFeedbackText = (progress: number) => {
  if (progress === 0) {
    return "Your pixel pet is ready to hatch! Tap the egg to give it a helping hand.";
  } else if (progress < 25) {
    return "Keep going! Each click brings your pet closer to seeing the world.";
  } else if (progress < 50) {
    return "You're doing great! Your pet's almost ready to hatch.";
  } else if (progress < 75) {
    return "Almost there! Your pet is about to hatch, keep clicking!";
  } else if (progress < 100) {
    return "This is it! With a few more clicks, your pixel pet will hatch into the world!";
  } else {
    return "Welcome to the world, little one! Your journey together begins now.";
  }
};

export const getFoodFeedbackText = (petName: string, selectedEgg: Egg | null, selectedPetFood: string) => {
  if (petName !== "" && selectedPetFood === "") {
    return `Name locked in! ${petName} is officially part of the family. ${petName} seems happy but hungry!`;
  } else if (selectedPetFood !== "") {
    if (selectedEgg) {
      if (doesPetLikeFood(selectedEgg?.type, selectedPetFood)) {
        return `${petName} loved the food! Well done!`;
      } else {
        return `Oh no, ${petName} didn't enjoy the food. Try again!`;
      }
    }
  }
  return "";
};
