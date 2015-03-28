*** Setting ***
Library		Selenium2Library

*** Variable ***

*** Testcases ***
Valiate button Test
	Open Browser		http://localhost:8000/   Chrome
	Maximize Browser Window
	Click Element 		//*[@id="btn-answer"]
	Wait Until Page Contains 	The number is required and cannot be empty    0.5

Calculate Test
	Go To		http://localhost:8000/
	Input text					//*[@id="in-first-number"]	 	5
	Click Element				//*[@id="validator-form-cal"]
	Click Element				//*[@id="operator"]
	Click Element				//*[@id="minus"]
	Input text					//*[@id="in-second-number"]	 	2
	Click Element 		//*[@id="btn-answer"]
	Element Should Contain 		//*[@id="answer"]		3.00000

	# Page Should Not Contain 	The numberi is required and cannot be empty
#Reset Form
	#Click Element		resetBtn

Close Browser
	Close Browser
*** Keywords ***
