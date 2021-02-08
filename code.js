$(document).ready(function () {
    // add event listener
    $("#loanForm").submit(loanForm);

    // add workable function
    function loanForm(event)
    {
        event.preventDefault();

        let salary = parseFloat($("input#salary").val());
        let creditScore = parseFloat($("input#creditScore").val());
        let monthsAtJob = parseFloat($("input#monthsAtJob").val());

        if(salary < 0)
        {
            alert("Error: Salary cannot be negative");
            return;
        }

        if(salary >= 300000)
        {
            alert("Look, if you need a loan that's not our problem.");
            return;
        }

        if(creditScore < 300)
        {
            alert("Error: Credit score cannot be below 300");
            return;
        }

        if(creditScore > 850)
        {
            alert("Error: Credit score cannot be above 850");
            return;
        }

        if(monthsAtJob < 0)
        {
            alert("Error: Months cannot be negative");
            return;
        }

        if(monthsAtJob >= 600)
        {
            alert("Look, if you need a loan that's not our problem.");
            return;
        }

        if (salary >= 40000 && creditScore >= 600)
        {
            $("p#loanApprovalOutput").text("Loan Approved!");
        }
        else if (salary <= 40000 && monthsAtJob > 12)
        {
            $("p#loanApprovalOutput").text("Loan Approved!");
        }
        else if (creditScore >= 600 && monthsAtJob > 12)
        {
            $("p#loanApprovalOutput").text("Loan Approved!");
        }
        else
        {
            $("p#loanApprovalOutput").text("Loan Denied");
        }

    }
    }
);