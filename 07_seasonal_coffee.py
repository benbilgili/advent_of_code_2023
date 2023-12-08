# Seasonal Coffee. Give a date return syrup for the season (eg pumpkin spice for october) - Dougmac

syrups = {
    "jan": "peppermint syrup",
    "feb": "cherry blossom syrup",
    "mar": "salted caramel syrup",
    "apr": "dark chocolate syrup",
    "may": "coconut syrup",
    "jun": "toasted almond syrup",
    "jul": "blackberry syrup",
    "aug": "peach syrup",
    "sep": "maple spice syrup",
    "oct": "pumpkin syrup",
    "nov": "cinnamon syrup",
    "dec": "eggnog syrup",
}

def find_syrup():
    keys_array = syrups.keys()
    while True:
        month = input("Enter abbreviated month (eg jan) to find syrup: ").lower()
        if month in keys_array:
            selection = syrups[month]
            print("The syrup is: " + selection)
            break
        else: 
            print("Invalid Selection, please try again.")

find_syrup()

