const table = $('#table');
const editor = $('#editor');
const url = "http://localhost:5219";

$(document).ready(function() 
{
    $('.ap1').click(function()
    { 

    });
});

UpdateTable();
function UpdateTable()
{
  $.getJSON(`${url}/User/GetAll`)
  .done(function(data)
  {
    //alert(JSON.stringify(data));
    ShowTable(data);
    ShowEditorTable(data);
    console.dir(data);
  })
  .fail(function()
  {
    console.log( "error" );
  })
  .always(function()
  {
    console.log( "complete" );
  });
}

function ShowTable(data)
{
	table.html('');
  let row = Object.keys(data[0]);

  for (let j = 0; j < row.length; j++) 
  {
    console.dir(row[j]);

    $('<th>')
    .html(`${row[j]}`)
    .appendTo(table);
  }

	for (let i = 0; i < data.length; i++)
	{
		let tr = $('<tr>');
    let row = Object.values(data[i]);

		for (let j = 0; j < row.length; j++) 
		{
      console.dir(row[j]);

			$('<td>')
      .html(`${row[j]}`)
			.appendTo(tr);
    }
    table.append(tr);
  }
}

function ShowEditorTable(data)
{
	editor.html('');

  let row = Object.keys(data[0]);
  for (let j = 0; j < row.length; j++) 
  {
    let tr = $('<tr>');
    console.dir(row[j]);
    $('<td>')
    .html(`${row[j]}`)
    .appendTo(tr);

    $('<td>')
    .html(`<input id="${row[j]}"></input>`)
    .appendTo(tr);
    
    editor.append(tr);
  }  
}