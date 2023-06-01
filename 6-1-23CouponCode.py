# Your mission:
# Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

# A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".


def check_coupon(entered_code, correct_code, current_date, expiration_date):
    return True if entered_code == correct_code and current_date >= expiration_date else False


def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code==correct_code and current_date>=expiration_date:
        return True
    else:
        return False