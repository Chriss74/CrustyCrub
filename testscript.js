function clearElement(ID) {
			var x = document.getElementById(ID);
			x.innerHTML = " ";
		}

	function appendTo(ID,Text){
			var x = document.getElementById(ID);
			x.innerHTML = x.innerHTML + "<br/> - " + Text;
		}
	// Δεν ήμουν σίγουρη εάν πρέπει να ελέγχθούν όλα τα πεδία και με javascript και τα ελέγχω όλα
	function checkForm(){
			clearElement("problemArea");
			var x = document.getElementById('problemArea');
			x.innerHTML = "Error Messages Area:";
			var t1 = checkEmail();
			var t2 = checkCategory();
			return t1 && t2 ; 
		}
		
		
	function checkEmail(){	
			var mail = document.forms[0].email.value;
			if (mail.indexOf('@') == -1) 
				{appendTo("problemArea","Please, insert a valid email."); return false;}
			
			return true;
		}
		
	function checkCategory()
		{
			var i;
			for (i=0;i<4;i++)
			{
				if (document.forms[0].category[i].checked) {return true;}
			}
			
			appendTo("problemArea","Please, select a category.");
			return false;
		}
