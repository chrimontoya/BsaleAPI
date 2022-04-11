# BsaleAPI
Desafío bsale 

El desafío está desarrollado con backend en Django, el cual es un servidor básico que solo se encarga de entregar una URL en donde se pueden obtener todos los productos y también filtar por categoria. El servidor no cuenta con la suficiente validación, ni tampoco con un agregado de buscar.

Por parte del front-end solo está construido básicamente con html y un nav de bootstrap. Una vez que se carga la página el archivo js se encarga de realizar una petición de tipo GET al backend para poder listar todos los productos, en más de una ocasión puede que la petición de tipo GET arroje error 500 al igual que un POST.

El servidor está desplegado en Heroku mientras que el front está en Netlify.
