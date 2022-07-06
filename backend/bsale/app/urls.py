from django.urls import include, path
from rest_framework import routers
from .views import CategoryViewSet,ProductViewSet


#generador de rutas para la url ej: http://localhost:8000/api/product/
router=routers.DefaultRouter()
router.register('products',ProductViewSet)
router.register('categorys',CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
