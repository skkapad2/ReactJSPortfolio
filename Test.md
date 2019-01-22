Pro Team Incident Report Enrichment
==========================
Overview
--------
This feature adds new information to Flight Card in Dashboard. New information could include: Incident details, what type of compensation was given and how much compensation.

Assumptions
--------
* The user has successfully reached the point of the process where adding compensation is required 
* The case in question has met the criteria for compensation

The Controls
------------
* Add Compensation Slider
    * Default state has slider aligned in the middle of the range 
    * Compensation slider limits within ranges dictated by United's guidelines
* Compensation Category drop down
    * Ex: Electronic Travel Certificate, Miles, Dollars 
* Add hyperlink button
    * Press to add a Compensation
* Expand/Minimize button
    * Will either expand or minimize the Compensation card
    * The default state of the button will be to maximize the Compensation card
* Drag and drop Overflow cards
    * User can drag an Overflow card and drop it over a minimized or maximized card to replace it
        * If dropped over a maximized card, the Overflow card will become maximized
    * When all cards are in minimized view, pressing on a card in Overflow view and not dragging it will replace the card's position with the right-most card
    * If there is a card in maximized view, pressing on a card in Overflow view and not dragging it will maximize the card

Acceptance Criteria
-----------------
1. User presses the 'Add' hyperlink button
2. Compensation slider appears 
3. User selects a compensation amount & type of compensation
4. User presses 'Add' hyperlink button again & the compensation is attached to case. 
 
Feature Files
----------------------------------
Case.Add.Compensation.feature : 'https://bdd/Add_Compensation.feature'

Design Documents
--------
2018 August 1st Wireframe:
![Main Screen Annotated Wireframe](images/Min_Comp_Card.png)
![Compensation Expanded Annotated Wireframe](images/Maxed_Compensation_Card.png)
Live Wireframes: 'https://tbd'

Interaction Design
----------------------------------
Display ProTeam Icon on Dashboard and ProTeam details in a popup.
