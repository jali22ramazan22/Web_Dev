from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Company, Vacancy
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404

def listAllCompanies(request):
    companies = Company.objects.all()
    data = serialize('json', companies)
    return JsonResponse(data, safe=False)

def getCompany(request, pk=None):
    company = get_object_or_404(Company, id=pk)
    data = serialize('json', [company])
    return JsonResponse(data, safe=False)

def getAllVacancies(request):
    vacancies = Vacancy.objects.all()
    data = serialize('json', vacancies)
    return JsonResponse(data, safe=False)

def getVacancy(request, pk=None):
    vacancy = get_object_or_404(Vacancy, id=pk)
    data = serialize('json', [vacancy])
    return JsonResponse(data, safe=False)

def getVacancybyCompany(request, pk=None):
    company = get_object_or_404(Company, id=pk)
    vacancies = Vacancy.objects.filter(company=company)
    data = serialize('json', vacancies)
    return JsonResponse(data, safe=False)

def getTopVacancies(request):
    top_vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    result = [
        {"id": vacancy.id, "salary": vacancy.salary, "company_id": vacancy.company_id}
        for vacancy in top_vacancies
    ]
    return JsonResponse(result, safe=False)
