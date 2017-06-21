
import junit.framework.*;
import org.junit.Test;

public class FizzbuzzTest extends TestCase {
  @Test
  public void testTrue() throws Exception {
    assertEquals(true, true);
  }

  @Test
  public void testFizz() throws Exception {
    assertEquals("fizz", Ex.fizzbuzz(3));
    assertEquals("fizz", Ex.fizzbuzz(6));
    assertEquals("fizz", Ex.fizzbuzz(18));
  }

  @Test
  public void testBuzz() throws Exception {
    assertEquals("buzz", Ex.fizzbuzz(5));
    assertEquals("buzz", Ex.fizzbuzz(10));
    assertEquals("buzz", Ex.fizzbuzz(25));
  }

  @Test
  public void testFizzbuzz() throws Exception {
    assertEquals("fizzbuzz", Ex.fizzbuzz(15));
    assertEquals("fizzbuzz", Ex.fizzbuzz(30));
    assertEquals("fizzbuzz", Ex.fizzbuzz(150));
  }

  @Test
  public void testElse() throws Exception {
    assertEquals("2", Ex.fizzbuzz(2));
    assertEquals("8", Ex.fizzbuzz(8));
    assertEquals("52", Ex.fizzbuzz(52));
  }
}
