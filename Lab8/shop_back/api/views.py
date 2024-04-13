# Create your views here.
from django.core.serializers import serialize
from django.http.response import JsonResponse

from .models import Category, Product


def get_products(unused):
	try:
		products = Product.objects.all()

		products_json = serialize('json', products)
		return JsonResponse(products_json, safe=False)
	except:
		return JsonResponse(status=404)


def get_product(unused, pk=None):
	try:
		product = Product.objects.get(id=pk)
		product_json = serialize('json', [product])
		return JsonResponse(product_json, safe=False)
	except:
		return JsonResponse(status=404)


def get_categories(unused):
	try:
		categories = Category.objects.all()

		category_json = serialize('json', categories)
		return JsonResponse(category_json, safe=False)
	except:
		return JsonResponse(status=404)


def get_category(unused, pk=None):
	try:
		category = Category.objects.get(id=pk)

		category_json = serialize('json', [category])
		return JsonResponse(category_json, safe=False)
	except:
		return JsonResponse(status=404)


def product_list_by_category(unused, pk):
	try:
		products = Product.objects.filter(category_id=pk)

		products_json = serialize('json', products)

		return JsonResponse(products_json, safe=False)

	except:
		return JsonResponse(status=404)