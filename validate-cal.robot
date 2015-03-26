*** Setting ***
Library		Selenium2Library
*** Variable ***

*** Testcases ***
Valiate button Test
	Open Browser		http://localhost:8000/   Chrome
	Maximize Browser Window
	Click Element 		//*[@id="btn-answer"]
	Wait Until Page Contains 	The number is required and cannot be empty    0.5

Fill Test
	Go To		http://localhost:8000/
	Input text			//*[@id="in-first-number"] 	AbcE1234.45
	Textfield Should Contain	//*[@id="in-first-number"]	 	1234.45
	Input text			//*[@id="in-second-number"] 	AbcE1234.45
	Textfield Should Contain	//*[@id="in-second-number"]	 	1234.45

	Page Should Not Contain 	The numberi is required and cannot be empty
Reset Form
	Click Element		resetBtn

Close Browser
	Close Browser
*** Keywords ***
