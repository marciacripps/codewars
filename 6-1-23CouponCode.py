# Your mission:
# Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

# A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".


from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    now = datetime.strptime(current_date, "%B %d, %Y")
    exp = datetime.strptime(expiration_date, "%B %d, %Y")

    return entered_code is correct_code and now <= exp