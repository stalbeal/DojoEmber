App = Ember.Application.create();

App.Router.map(function() {
	//register all routes here
	this.route('create', {path:'/create'});
	this.route('index', {path:'/'});
});

App.CreateController = Ember.Controller.extend({
	actions: {
		create:function(){
			var userParams = this.get("model");
			$.ajax({
				url: 'http://proyectosudea.hol.es/users',
				type: 'POST',
				data: JSON.stringify(userParams),
				contentType: 'text/json'
			});
		}
	}
});

App.CreateRoute = Ember.Route.extend({
	model: function(){
		return Em.Object.create({});
	},
	setupController: function(controller, model){
		controller.set('model', model);
		controller.set('title', 'Crear nuevo usuario');	
	}
});

App.IndexController = Ember.Controller.extend({
	title: 'Lista de Usuarios',
	users: '',
	actions : {
		delete : function(user){

		}
	}
});

App.IndexRoute = Ember.Route.extend({
	setupController: function(controller){
		$.get('http://proyectosudea.hol.es/users', function(data){
			controller.set('users', JSON.parse(data).users);
		});
	}
});