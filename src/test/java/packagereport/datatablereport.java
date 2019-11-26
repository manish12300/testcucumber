package packagereport;



import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class datatablereport{
	
	@Given("^There are \"([0-9]{1,})\" fruits$")
	public void fruits(String a,DataTable t)
	{
		List<Map<String,String>> data=t.asMaps(String.class,String.class);
		
		System.out.println("There are "+a+" fruits with "+data.get(0).get("with"));
		System.out.println("There are "+a+" fruits with "+data.get(1).get("with"));
		System.out.println("There are "+a+" fruits with "+data.get(2).get("with"));
		
		
	}
	@When("^I eat \"([0-9]{1,})\" fruits$")
	public void whenieat(String b) {
		System.out.println("I eat "+b+" fruits");
	}
	
	@Then("^I have \"([0-9]{1,})\" fruits$")
	public void heworks(String c) {
		System.out.println("I have "+c+" fruits");
	}
	
	
	
	

}
