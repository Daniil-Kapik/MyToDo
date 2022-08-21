from django.core.management.base import BaseCommand
from users.models import Users


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('count')

    def handle(self, *args, **options):
        # Удаление пользователей
        Users.objects.all().delete()
        user_count = options['count']
        # Создаем суперпользователя
        Users.objects.create_superuser('djon', 'djon@test.com', 'djon539616')
        # Создаем пользователей
        for _ in range(user_count):
            Users.objects.create_users(
                f'user{_}', f'user{_}@test.com', 'djon539616')
        print('done')
