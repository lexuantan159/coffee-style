import React from "react";
import "./Stories.scss";
import StoryItem from "./story-item/StoryItem";
const Stories = ({ stories, conditionStory = "" }) => {
  const length = stories.length;
  var listStories = [];
  if (conditionStory === "") {
    listStories = stories;
  } else {
    listStories = stories.filter((item) => {
      return item.type === conditionStory;
    });
  }
  return (
    <div className="container">
      <div className={length === 2 ? "list-stories_2" : "list-stories"}>
        {listStories.map((story, index) => {
          return (
            <StoryItem key={index} numbersOfItem={listStories.length} item={story} />
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
