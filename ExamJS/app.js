var table = $('#table');

$(document).ready(function() 
{
    $('.ap1').click(function()
    { 
        $.getJSON("http://localhost:5219/User/GetAll")
        .done(function(data)
        {
            alert(JSON.stringify(data));
            FillTable(data);
            console.log(data);
        })
        .fail(function()
        {
            console.log( "error" );
        })
        .always(function()
        {
            console.log( "complete" );
        });
    });
});



function FillTable(data)
{
  let json = data;
	table.html('');

	for (let i = 0; i < json.length; i++)
	{
		let tr = $('<tr>');
    console.dir(json[i]);
	
    let v = Object.values(json[i]);
		for (let j = 0; j < v.length; j++) 
		{
			$('<td>').html(`${[j].value}`)
			.appendTo(tr);
    }
    
    table.append(tr);
  }
}