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

        if (salary >= 40000 && creditScore >= 600)
        {
            $("p#loanApprovalOutput").text("Loan Approved!");
        }
        else if (salary >= 40000 && monthsAtJob > 12)
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