<!DOCTYPE html>
<html>
<head>
	<title>Chat</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" >
    <style>
    	.list-group {
    		overflow-y: scroll;
    		height: 200px;
    		background-color: #ffffff;
    	}
    </style>
</head>
<body>
	<div class="container" id="app">
		<div class="row">
			<div class="col-4 ml.auto">
				<li class="list-group-item active">Chat</li>

				<ul class="list-group" v-chat-scroll>

				  	<message

					v-for="value, index in chat.message"
				  	:key=index
				  	color='success'
				  	:user = chat.user[index]
				  	>
				  		@{{ value }}
				  	</message>

				</ul>
				<input type="text" class="form-control" placeholder="Type your text here..." v-model="message" v-on:keyup.enter="send">
			</div>
		</div>
	</div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
