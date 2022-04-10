const table = $('#table');
const editor = $('#editor');
const url = "http://localhost:5219";
var exampleObj;

$(document).ready(function() 
{
    $('.ap1').click(function()
    { 

    });
});

$('#ok').click(function()
{ 
  let info = new Object();
  for (let j = 0; j < exampleObj.length; j++) 
  {
    info[`${exampleObj[j]}`] = $(`#${exampleObj[j]}`).prop("value");
  }

  let ID = $(`#${exampleObj[0]}`).prop("value"), TYPE, URL;

  if (ID == '')
  {
    TYPE = "PUT";
    URL = `${url}/User/Add`;
  }
  else
  {
    TYPE = "PATCH";
    URL = `${url}/User/Update`;
  }
  console.dir(info);
  $.ajax({
    type: TYPE,
    url: URL,
    dataType: 'json',
    data: info,
    success: function(data) {
       console.log(data);
    }
  });
});


UpdateTable();
function UpdateTable()
{
  $.getJSON(`${url}/User/GetAll`)
  .done(function(data)
  {
    ShowTable(data);
    ShowEditorTable(data);
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
  exampleObj = row;

  for (let j = 0; j < row.length; j++) 
  {
    $('<th>')
    .html(`${row[j]}`)
    .appendTo(table);
  }

	for (let i = 0; i < data.length; i++)
	{
		let tr = $('<tr>');
    let row = Object.values(data[i]);
    tr.obj = row; 

		for (let j = 0; j < row.length; j++) 
		{
      console.dir(row[j]);

			$('<td>')
      .html(`${row[j]}`)
			.appendTo(tr);

    }
    let td = $('<td>').attr("class", "editORdel");
      $('<button>EDIT</button>')
      .attr("class", "edit")
      .click(Edit)
      .prop("obj", data[i])
      .appendTo(td);
      tr.append(td);

      td = $('<td>').attr("class", "editORdel");
      $('<button>DELETE</button>')
      .attr("class", "del")
      .appendTo(td);
      tr.append(td);

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

    $('<td>')
    .html(`${row[j]}`)
    .appendTo(tr);

    let input = $('<input></input>');
    if (row[j] === 'id')
      input.attr('disabled', true);
    input.attr('id', `${row[j]}`);

    $('<td>')
    .append(input)
    //.html(`<input id="${row[j]}"></input>`)
    .appendTo(tr);
    
    editor.append(tr);
  }  
}

function Edit()
{
  console.dir(this.obj);
  //alert(this.obj);
  let keys = Object.keys(this.obj);
  let values = Object.values(this.obj);
  for (let j = 0; j < keys.length; j++) 
  {
    $(`#${keys[j]}`).prop("value", `${values[j]}`);
  }
}