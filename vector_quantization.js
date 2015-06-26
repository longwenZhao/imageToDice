/**
 * Created by lzhao on 6/25/15.
 */

( function( window, undefined ) {

    function imgToDice(img,baseCanvas,newCanvas){
        this.img = img;
        this.baseCanvas = baseCanvas;
        this.newCanvas = newCanvas;
        var cx = this.baseCanvas.getContext('2d');
        this.baseCanvas.getContext('2d').drawImage(img,0,0);

        img1 =new Image()
        img1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVQ4T92SPQqDQBSEV435QbL3MOmtPIhpcgUtUkpcA0I6hVxCr2DlTcQTpJGVld33QjqtFgNJkdcO88HMG6Pv+d1xdhdCiEkWHCIKLsTNAADRti3WdT0u8BPf9zeH49E0EFGVVSVPQbBeAsjznERRRP4ZQCmV1ySRoBQyxtacc2vakbaDoihEGIabtynLsjGO41nJ3wfsKZXJNVEKFKSM2Zzz1aIIuk1oI/wUIMuqUh9PGQCeXdftm6aZ/VkXwfM84rquMvphOG9t+2FZFtWZpjogjqMQ6QunkdmFwKSvmQAAAABJRU5ErkJggg=="

        img2 =new Image()
        img2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4T93TP0/CQBQA8HseaaGfgamUzTJ2IpGUr0BkZXCh4oKJLtZ0dpRBXLhEdsOoRkKKCQnyBZrUfgUmz6s9uDMyOGgk3urb3+/l/QPK2HVB1w8AAJBCrKVkjLETEEKsoyjKwjDkCvnIdd28WSpxkFKKq36fe+22tg1oNBppt3uMx+NH7vt+gRACrVYL/REATukrGIaR+yziOA7zPK+gACARxy8ryyppnHNRLpdXQRBoKgAqFovZfrMpn6ZTtFgsdEIIUgK+z+e/Am69/m7v2mg4vMHL5XKzst/ixwzIYIDm8+ccANoJw2laq+3llYD7uwcxGt1ukpIkSS3LUgOOOh182etlFbuSOzv3ZTiZbD3trxaEEG9xHGuz2QyrPFO1WkWmaaZAKT3Udf0CY2yoAFJKRtP09ANUfu9L+KusbwAAAABJRU5ErkJggg=="
        img3 = new Image()
        img3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVQ4T6XTMU/CQBQH8DtLWujalQnKJoxMJBL4CkRGGFyouGDQxUITnAyTDOJCG9kNoxoJKSYkyBcgqXwFQhPrlV65MzAYiBFofOvl/7u89+6ghdB9gONOIIQQeKgFpQghdAEJIYvxeOzouo495EEqlfKHwmEMKaXkrtnEUqHAbgMymYxdKp0z3e4rlmU5oKoqzOfzYE8AYsv6hDzP+5aXxONxJElSwAMAiGF8uKIYZjHGJBKJuIqisF4AEAwGneNslr71+2A0GnGqqoKtgCAIuKoorjmbgVqtxjqOw6zPaCegado8l8txy1C5XHbq9frGkHcCqqbN8/8BBEFwK9Wqa5omvd63hVQ6PY8eRkG7/cBMp9PVyv6qXy2orRYYDt99EIIDXe/byeSR3xPw/PRCOp3HVWgymdiiKHoDzopF5rbRcGLRmO+qIlO919v6tH9aIIR8GYbBDgaDjT3v+liJRAKEQiEbWpZ1ynHcDcMw/K7Q+jmlFFm2ffkN19wWWuxkqHIAAAAASUVORK5CYII="

        img4 = new Image()
        img4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4T92SMU/CQBiG7yxpob+BqRybrRsTiaT8BSIrgwsVF0x0sYbZEQZx4RLYDaMaCSkmTSh/gKTyF5g8r/bgzrRGAzEM1c13ui+57/mS930hofQ2oyjHEEIIEmgtBKWUnkPO+Xo+n4eO47AE+8A0zbSWyzEohOA33S47bTSkdrsdGsZB6vLKFs54LG8CK5VK0GyeSaPRE7NtO4MxhrVaDXwDHu4f+XB4l46WFotFgBCK35+CjJBXqKpqKpoKhQK1LCuzBcC9HvA8L/qw5ziToFQ63AAA7vsvK4RyMmOM5/P5VavVkrcAVr0um+Xyu67rYNDvS8vlMr72pWw2Gx5Vq+J5MgGz2UzBGIMfgCQm/ldAbOK+DgaDX5gYxTideikId8XorxBCu2P8c5HiKnc6oaEbyarMOX/zfV92XVdK0oNisQg0TQsgIeREUZRrSZLUJAAhBCVBcPEBEhYsWsw5xs0AAAAASUVORK5CYII="

        img5 = new Image()
        img5.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhElEQVQ4T6WTsWrCUBSG720k0ayuTjGOYicnoRJfQepohi6mdrHYLo0GdCouTrWLCXavc0tFYkGwvoCQ+gqiQ5qYG+8tCi0JpaTWM97D/13O/58DTcu6jzDMGYQQgj1qQ4hlWdYVxBhvZrOZo+s62kMPBEEIc/E4goQQfNfpoItymWq32yiVOqZuajLRh0PaC8zn83alckkNBi9IluWIqqpQFEXwDXh+eib9/iOzFc3nc5vn+bAHgEzThCzLhrZv6XTakiQp4gOo3S6YTN5CEIIjXR/Z2eyJF4AN493l+TiNEMKJRMJVFIX2AaRSiRZyuXUymQQPvR61WCx2v31VLBZzTgsF8Doakel0yqiqCn4AvIJoNOrWFQWtlkvQaDRox3Eobz8QoGnaulgs7jypVqtOq9XymRoIUDVtLR4C2I5Qq9fd1XJFms0/jnCQicExGi7P87/HePAi/XuVMcYfhmHQ4/HYl3PQYWUyGcBxnA1N0zxnGOaWoig2SOTtE0Is07avPwGNcFNaGIfZxgAAAABJRU5ErkJggg=="

        img6 = new Image()
        img6.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAByElEQVQ4T61SsU4bQRCdvT3fGkjlL7BMZUcYiZAqVwRLVs7mA47SBY0hpkwkIkVIoXEKuznBUVlQGaeFAjoLZCwUJOhOtmNk+IFrLrvHybvROrKbSyQIedWONO/tzJuHPEr3pghZRQgheAKGQlBK6QfEOR86jvPQbDaDJ/Ahk8lEE7OzARJC8F3bDtaKxcjnrS2WMwxcrVahcXiojQVVVR1alvWQSr1UNz9t8vOzM1Kr1aBQKMBEwLZtuLm+HpEoZcOZFzNCcK7K2jRNVq/Xo/LtOA5NJpNTIYHtL9vQ7/9QCSHKYDDw4/F4BAAUSXqj60z+CgDo5OTUN4x34QnWikVtYeFVsLT0ljca35T7+zspMEE2m2XJVEo52N9XXNdVQxNIAdNcoblcDmx7F7fb7YkHACBKpQ0/nZ4T5XJZ7fV6kZBAtVJBnU4Hy7Fd1w1isZgihJA15PPL7Pj4aOTB96sr9npxMfr/BX6vYMoV0M7OHrq8vJCmjSHel0r+fDr99xWebaI84+1tH2uahv/pjM8O0jjKecPAlXCUuWVZ/h+jzDn/2e12tVarNTrZY6HrOiQSCYY8z1snhHzFGE8/liz7hBDUY+zjL+55eFpFKowIAAAAAElFTkSuQmCC"

        this.imgs = [0,img1,img2,img3,img4,img5,img6]

        var dice_nums = [];
        for(var i =0; i<img.width/16;i++){
            for(var j=0;j<img.height/16;j++){
                var data= cx.getImageData(i*16,j*16,16,16).data;
                var gray_numbers = [];
                for(var k =0; k<data.length; k+=4){
                    var red = data[k];
                    var green = data[k+1];
                    var blue = data[k+2];
                    var alpha = data[k+3];
                    var gray = (0.3*red + 0.59*green + 0.11*blue);
                    gray_numbers.push(gray);
                }
                var avg_num = avg(gray_numbers);
                dice_nums.push(six_step_gray(avg_num));

            }
        }

        var picInfo = {
            "height" : Math.floor(img.width/16)+1,
            "width" : Math.floor(img.height/16)+1,
            "Pixels" : dice_nums
        };
        draw(picInfo);

    }

    var draw = function(picInfo){


        var width = picInfo["width"];
        var height = picInfo["height"];
        var Pixels = picInfo["Pixels"];

        this.newCanvas.width = height * 16;
        this.newCanvas.height = width * 16;

        var x = 1,y = 1;
        for(key in Pixels)
        {
            if (y > width)
            {
                y = 1
                x++
            }
            xAxis = x * 15 + 1
            yAxis = y * 15 + 1
            this.newCanvas.getContext('2d').drawImage(this.imgs[Pixels[key]], xAxis, yAxis)

            y++
        }
    }

    var avg = function(numbers){
        var sum = 0;
        numbers.forEach(function(number){ sum +=number;});
        return sum/numbers.length;
    };

    var six_step_gray = function(x){
        if (0 <= x && x <= 41) return 1;
        if (41 < x && x <= 83) return 2;
        if (83 < x && x <= 124) return 3;
        if (124 < x && x <= 165) return 4;
        if (165 < x && x <= 206) return 5;
        if (206 < x && x <= 247) return 6;
        else return 6;
    };


    window.imgToDice = imgToDice;

})(window)