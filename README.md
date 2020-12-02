# Lyft5 Motion Prediction for Autonomous Vehicles

## Introduction
The Lyft l5kit dataset includes over 1000 hours of agent information. Given agent information from the last 10 time steps, we will try to predict the trajectory of the next 50 timesteps. Below are small gifs featuring 50 timesteps, the same amount of timesteps we have designed our model to be able to predict. With the help of past trajectory information, birds eye view images, and more, we were able to successfully train our models to make reasonable predictions on future trajectories of agents in the scene.

## Semantic Map Examples
<div style="display: flex; justify-content: space-around;">
<img src="src/gifs/Semantic/ComingToStop.gif" />

<img src="src/gifs/Semantic/FastTraffic.gif" />
</div>
<div style="display: flex; justify-content: space-around;">
<img src="src/gifs/Semantic/Freeway_Semantic.gif" />

<img src="src/gifs/Semantic/Waiting.gif" />
</div>

# Satellite Map Examples
<div style="display: flex; justify-content: space-around;">
<img src="src/gifs/Satellite/Fast.gif" />
<img src="src/gifs/Satellite/Stop2.gif" />
</div>    
<div style="display: flex; justify-content: space-around;">

<img src="src/gifs/Satellite/StopThenTurn.gif" />
<img src="src/gifs/Satellite/Turning.gif" />
</div>

## Project Structure

    .
    ├── Models                  # Source code for ALL developed models
    ├── build                   # Compiled files 
    ├── public                  # Metdata files
    └── src                     # Source files for blog page
