from django.contrib import admin
from first_app.models import AccessRecord, Webpage ,Topic

# to register the database
admin.site.register(AccessRecord)
admin.site.register(Webpage)
admin.site.register(Topic)