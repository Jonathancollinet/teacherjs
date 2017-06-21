class Ex {

	/*
	* La méthode fizzbuzz a une portée "public" pour qu'on puisse l'appeller depuis
* la classe FizzbuzzTest.
	* La méthode fizzbuzz ne s'apllique pas sur un objet. Ce sera donc une méthode
* de classe que l'on déclare avec mot clé "static"
	* Elle retourne un resultat de type String ("fizz", "buzz", "fizzbuzz" ou n).
* Pour n il faudra penser à le convertir en String.
	*/
	public static String fizzbuzz(int n) {
		/*
		* On commence par vérifier si n est divisible par 15, ce qui équivaut à
* être divisible par 5 et 3 à la fois.
		* Cette condition doit être vérifiée avant les deux autres car elle est
* plus restrictive.
		*/
		if (n % 15 == 0) return "fizzbuzz";
		if (n % 3 == 0) return "fizz";
		if (n % 5 == 0) return "buzz";
		return Integer.toString(n);
	}
}
