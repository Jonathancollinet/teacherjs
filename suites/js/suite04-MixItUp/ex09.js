/*

    AircraftBomber

    Write a function that optimise flight departures.
    You must optimize the departure of each aircraft to bombard as many enemies as possible.

    One aircraft of each type can be prepared at a time.

    There is 3 bomber types:

    Heavy bomber:
        - flight time: 10s
        - bomb number: 50
        - time preparation for take-off: 10s

    Medium bomber:
        - flight time: 6s
        - bomb number: 15
        - time preparation for take-off: 5s

    Light bomber:
        - flight time: 1s
        - bomb number: 3
        - time preparation for take-off: 0.5s

    We pass to your function "aircraftBomber" an object that describe the aircraft stock.

    Exemples:

    {
        'h': 7,         // for heavy
        'm': 18,        // for medium
        'l': 32         // for light
    }

    Each planes has a method "displayState", that is called every new state and display the current state (for heavy in exemple):

    - if the plane is on airstrip, so in prepration, display "Heavy bombarder in preparation, sir!".
    - if the plane is taking-off, display "Heavy bombarder takes-off, sir!".
    - if the plane is on airstrip, so in prepration, display "Heavy bombarder in preparation, sir!".

*/
