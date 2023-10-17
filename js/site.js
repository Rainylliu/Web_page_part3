const dogCOCO = {
    name: "COCO",
    age: 12,
    weight: 9.92,
    height: 13,
    breed: "teddy bear dog",
};

const characteristicCOCO = {
    hair: {
        color: "brown",
        shape: "curly",
    },
    eyes: "black circles",
    nose: "black circle",
    tail: {
        length: "short",
    },
};

const COCOStories = {
    troublemaker: [
        "When Coco was a kid, it used to tear paper towels with its mouth, scattering scraps all over the floor.",
        "Once when my mother caught it, it ran up the stairs and stuck its head out to confront her.",
    ],
    pickUpFromSchool: [
        "When my parents came to pick me up from school, I could see COCO in the car. It would lie in the back of the car waiting for me to get in, and when I opened the door it would throw itself on top of me to welcome me.",
        "If COCO did not come to pick me up, it will obediently wait for me to go home at the door. What is very shocking to me is that COCO knows the time and it knows when I should go to school. Moreover, if he did not go to school with my parents to send me, he would be so sad that he had to wait for me at home. If I leave earlier than usual for school COCO does not want me to go out, and when I go out it will always cry in the house. If I go out at a normal time, he will go back to sleep in his nest.",
    ],
    ballLover: [
        "COCO's favorite thing to play with is the ball. It likes to put the ball in your hand and wait for you to throw it.",
        "No matter how far you throw the ball, it will take the ball back to your hand again and wait for you to continue to throw the ball, so over and over again tirelessly.",
    ],
    cleverPuppy: [
        "What is very shocking to me is that COCO knows the time and it knows when I should go to school.",
        "If I leave earlier than usual for school COCO does not want me to go out, and when I go out it will always cry in the house.",
        "If I go out at a normal time, he will go back to sleep in his nest.",
    ]
    
};

const COCOHabits = {
    smilingAngel: {
        behavior: "Every time you take a picture with COCO, it will be very cooperative to open its mouth and smile at the camera.",
        memorableEvent: "I took a picture with my dog when I first arrived home last year, and he was very excited to see me, so he left a happy smile in front of the camera again.",
    },
    strangeSleeping: {
        sleepingPosition: "COCO's sleeping posture is fun, it will be a variety of strange poses to make people feel very funny.",
        sleepHabit: "It often likes to lie flat on its belly to sleep, from the book that when the puppies think it is in a very safe environment will show their belly. COCO also hides under the covers in winter, and when I return to the bedroom I find a puppy waiting for me under the covers.",
    },
    cleanlinessLover: {
        behavior: "Unlike other puppies, COCO is very clean. Every time it returns home after an activity outside, it will wait dutifully for the family to scrub its paws and body.",
        memorableEvent: "When bathing, he will not run around and stand in the bath waiting to be washed.",
    },
};

function dogInfo(dog) {
    return `${dog.name} is a ${dog.age}-year-old ${dog.breed}. It weighs ${dog.weight} lbs and is ${dog.height} inches tall.`;
}

function describeCharacteristics(characteristics) {
    return `${characteristics.hair.color} hair, ${characteristics.hair.shape} hair shape, ${characteristics.eyes}, ${characteristics.nose}, and a ${characteristics.tail.length} tail.`;
}

function getStoryByTitle(title) {
    const story = COCOStories[title];
    if (story) {
        return story.join("\n");
    }
    return "Story not found";
}

function describeHabit(habitTitle) {
    const habit = COCOHabits[habitTitle];
    if (habit) {
        return `${habit.behavior}\n${habit.memorableEvent}`;
    }
    return "Habit not found";
}

console.log(dogInfo(dogCOCO));
console.log("COCO has " + describeCharacteristics(characteristicCOCO));

const storyTitle_1 = "troublemaker";
const storyTitle_2 = "pickUpFromSchool";
const storyTitle_3 = "ballLover";
const storyTitle_4 = "cleverPuppy";

console.log(getStoryByTitle(storyTitle_1));
console.log(getStoryByTitle(storyTitle_2));
console.log(getStoryByTitle(storyTitle_3));
console.log(getStoryByTitle(storyTitle_4));

const habitTitle_1 = "smilingAngel";
const habitTitle_2 = "strangeSleeping";
const habitTitle_3 = "cleanlinessLover";

console.log(describeHabit(habitTitle_1));
console.log(describeHabit(habitTitle_2));
console.log(describeHabit(habitTitle_3));