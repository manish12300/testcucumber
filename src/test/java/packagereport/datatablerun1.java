package packagereport;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"html:src/test/java/packagereport/output/cucumber-html-report",
				"json:src/test/java/packagereport/output/cucumber.json",
				"junit:src/test/java/packagereport/output/cucumber-results.xml"})

public class datatablerun1{
	
}
