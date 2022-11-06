# Searching-for-a-substring-in-a-string


ТЕСТ 1. Увеличение длины строки, в которой ищется подстрока (brute force).
В тексте романа «Война и мир» Л. Н. Толстого найти подстроку «князь Андрей». Сравнить время поиска в первом томе,
первых двух томах, первых трех томах, во всех четырех.


1: 22.7млс

1-2: 38.5млс

1-2-3: 41.9млс

1-2-3-4: 50.9млс


ТЕСТ 2. Увеличение длины искомой подстроки (brute
force).
В тексте романа «Война и мир» Л. Н. Толстого найти последовательно подстроки «князь», «князь Андрей», «князь Андрей Болконский». Сравнить время поиска. Соотносится ли
время поиска как 5 : 12 : 23? Объяснить результат. Как это
согласуется (не согласуется) с общей теорией?
Сделать то же для подстрок «фортификация которых производилась» и « которых производилсь» (первый символ — пробел).


"князь" : "князь Андрей" : "князь Андрей Болконский" == 37млс : 45млс : 47млс.

Время поиска не соотносится как 5 : 12 : 23, тк данное соотношение эквивалентно соотношеннию 5n : 12n : 23n, где n - длина строки S, а 5, 12, 23 - длины шаблонов "князь", "князь Андрей", "князь Андрей Болконский" соответсвенно, те эквивалентно времени, затраченному в худшем случае, коим наш случай не является.

"фортификация которых производилась" : " которых производилась" = 30.2 млс : 43.6 млс

На поиск более длинного шаблона потребовалось меньше времени,тк его первые символы встречаются реже, чем первые символы более короткого шаблона.


ТЕСТ 3. Сравнение brute force и хэшей.
Дана строка: миллион букв а. Даны подстроки: Т1 = a(100 раз)b b T2 = ba(100 раз)
Сравнить время работы двух вариантов поиска (brute force и хэши) в каждом из случаев. Результаты объяснить. Правда ли, что хэши всегда быстрее brute force?
