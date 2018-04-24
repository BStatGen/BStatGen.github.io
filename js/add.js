

    function createTable() {
            var a;

            a = document.getElementById('tb1').value;
            var length = document.getElementById('table').rows.length;
            if (a == "") {
                alert("Enter Numeric value of rows to be generated");
            } else {
              if(length > 1){
		
                
                var table = document.getElementById("table");
// Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(length);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = "<input type='text' name='" + "name".concat(length+1) + "'>";
                 cell2.innerHTML = "<input type='text' name='" + "name".concat(length+1) + "'>";
                 
              } else {
                var rows = " <tr><td>Player Name</td><td>No.</td><td>Points</td><td>Assist</td><td >Rebound</td><td >3pt-made</td><td >Foul-made</td><td >FT-made</td></tr>";
                for (var i = 0; i < a; i++) {
                    rows += "<tr><td class='tline'><input type='text' size = '5'><table><tr><th><strong> Score : </strong><output id ='playerscore1'></output></th></tr><tr><th><strong>FG: </strong><output id ='fgnum'></output>/<output id ='fgden'></output></th></tr><tr><th><strong>FG%: </strong><output id ='fgperc'></output>%</th></tr></table></td><td class='tline'><input type='text' size = '2'></td><td class='tline'><table><tr><input type='button' value ='+' onclick='twopoints(); playertwopoints(); playershot();'/><input type='button' value ='-' onclick='minustwo(); player1minustwo(); minusplayershot()'/></tr><tr><th><input type='button' value ='missed' onclick='missed()'/></th></tr></table></td><td class='tline'><table><tr><th><strong> Assist : </strong><output id ='playerassist'></output></th></tr><tr><input type='button' value ='+' onclick='playassist()'/><input type='button' value ='-' onclick='playassistminus()'/></tr></table></td><td class='tline'><table><tr><th><strong> Rebound : </strong><output id ='playerrebound'></output></th></tr><tr><input type='button' value ='+' onclick='playreb()'/><input type='button' value ='-' onclick='playrebminus()'/></tr></table></td><td class='tline'><table><tr><input type='button' value ='+' onclick='threepoints(); playerthreepoints(); playershot(); shotthreepts();'/><input type='button' value ='-' onclick='minusthree(); player1minusthree(); minusplayershot(); minusshotthreepts();'/></tr><tr><th><input type='button' value ='missed' onclick='missed(); missedthree();'/></th></tr><tr><th><strong>3ptFG: </strong><output id ='threeptsfgnum'></output>/<output id ='threeptsfgden'></output></th></tr><tr><th><strong>3ptFG: </strong><output id ='threeptsperc'></output></th></tr></table></td><td class='tline'><table><tr><th><strong> Fouls : </strong><output id ='playerfoul'></output></th></tr><tr><input type='button' value ='+' onclick='playfoul()'/><input type='button' value ='-' onclick='playfoulminus()'/></tr></table></td><td class='tline'><table><tr><input type='button' value ='+' onclick='freethrow();playerfreethrow();ftshot();'/><input type='button' value ='-' onclick='minusfreethrow(); player1minusft();minusftshot();'/></tr><tr><th><input type='button' value ='missed' onclick='"+"missedft()"+"'/></th></tr><tr><th><strong>FT: </strong><output id ='ftnum'></output>/<output id ='ftden'></output></th></tr><tr><th><strong>FT%: </strong><output id ='"+"ftperc"+"'></output></th></tr></table></td></tr>";
    }

                document.getElementById("table").innerHTML = rows;
                }

			}
        }
		

		
	