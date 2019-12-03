<?php

//1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
function add(){
    echo"Задание 1";
    echo "</br></br>";

    $a = rand(-100, 100);
    $b = rand(-100, 100);

    if ($a > 0 || $b > 0){
        echo "a = {$a} </br> b = {$b}";
        echo "</br></br>";
        echo $a - $b;
    }elseif ($a < 0 || $b < 0){
        echo "a = {$a} </br> b = {$b} ";
        echo "</br></br>";
        echo $a * $b;
    }else{
        echo "a = {$a} </br> b = {$b}";
        echo "</br></br>";
        echo $a + $b;
    }
}
add();

echo "<hr/</br></br>";

//2. Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от $a до 15. Вторым способом можете организовать цикл через рекурсию.

function oneToFive(){
    echo"Задание 2";
    echo "</br></br>";

    $a = rand(0, 15);

    switch ($a){
        case 0:
            echo "Zero";
            break;
        case 1:
            echo "One";
            break;
        case 2:
            echo "Two";
            break;
        case 3:
            echo "Three";
            break;
        case 4:
            echo "Four";
            break;
        case 5:
            echo "Five";
            break;
        case 6:
            echo "Six";
            break;
        case 7:
            echo "Seven";
            break;
        case 8:
            echo "Eight";
            break;
        case 9:
            echo "Nine";
            break;
        case 10:
            echo "Ten";
            break;
        case 11:
            echo "Eleven";
            break;
        case 12:
            echo "Twelve";
            break;
        case 13:
            echo "Thirteen";
            break;
        case 14:
            echo "Fourteen";
            break;
        case 15:
            echo "Fifteen";
            break;
        default:
            echo "No match";
    }

}
oneToFive();

echo "<hr/</br></br>";
//3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. Сделайте в функции деления проверку деления на ноль и возврат сообщения об ошибке.


    echo"Задание 3";
    echo "</br></br>";

    $a = rand(0, 10);
    $b = rand(0,10);

    function sum($x, $y){
        return $x + $y;

    }
    function sub($x, $y){
        return $x - $y;

    }
    function times($x, $y){
        return $x * $y;
    }
    function div($x, $y){
        if($y > 0){
            return $x / $y;
        }else{
            return "На ноль делить нельзя!";
        }

    }

    echo sum($a, $b); echo "</br>";
    echo sub($a, $b); echo "</br>";
    echo times($a, $b); echo "</br>";
    echo div($a, $b); echo "</br>";



echo "<hr/</br></br>";


//4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation), где $arg1, $arg2 –
// значения аргументов, $operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
echo"Задание 4";
echo "</br></br>";

function oper($arg1, $arg2, $operation){

    $action = $operation;

   switch ($action){
       case "сложение":
           return $arg1 + $arg2;
           break;
       case "вычитание":
           return $arg1 - $arg2;
           break;
       case "умножение":
           return $arg1 * $arg2;
           break;
       case "деление":
           return $arg1 / $arg2;
           break;
   }

}



echo oper(rand(1, 20),rand(1, 20), 'сложение' ); echo "</br>";
echo oper(rand(1, 20),rand(1, 20), 'вычитание' ); echo "</br>";
echo oper(rand(1, 20),rand(1, 20), 'умножение' ); echo "</br>";
echo oper(rand(1, 20),rand(1, 20), 'деление' );echo "</br>";




// 6. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power($val, $pow), где $val –
// заданное число, $pow – степень. Отрицательные степени можно не делать, при желании сделайте через замыкание.

echo"Задание 6";
echo "</br></br>";

function inc($val, $pow){

    for($i=0; $i<$pow;$i++) {
       return  $val *= $val;
    }

}

echo inc(4, 2);









