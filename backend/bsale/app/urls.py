from django.urls import include, path
from rest_framework import routers
from .views import CategoryViewSet,ProductViewSet

router=routers.DefaultRouter()
router.register('producto',ProductViewSet)
router.register('categoria',CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
