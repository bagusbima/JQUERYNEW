<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
	<h1>Form Login</h1>
	<br><br>

	<form>
		<label>Username</label>
		<br><br>
		<input type="text" name="">

		<br><br>

		<label>Password</label>
		<br><br>
		<input type="password" name="" class="pass">

		<br>
		<input type="checkbox" name="" class="cbox"> Show Password
		<br>
		<button>Login</button>
	</form>
	<script type="text/javascript">

		$(document).ready(function(){

			$('.cbox').click(function(){
				if($(this).is(':checked')){
					$('.pass').attr('type', 'text');
				}
				else{
					$('.pass').attr('type', 'password');
				}
			});
		});

	</script>


</body>
</html> 