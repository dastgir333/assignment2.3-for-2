public class Date  
{  
    private int month = 7;  // Backing store  
  
    public int Month  
    {  
        get  
        {  
            Console.writeLine("month is being accessed");
            return month;  
        }  
        set  
        {  
            if ((value > 0) && (value < 13))  
            {  
                month = value;  
            }  
        }  
    }  
}  