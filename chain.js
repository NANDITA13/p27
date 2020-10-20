class Chain {

          constructor (body1 , body2) {

              var options = {

                    bodyA : body1,
                    bodyB : body2,
                    lenght : 10,
                    stiffness : 0.04
              }

              this.chain = Constraint.create (options);

              World.add(myWorld , this.chain );

          }

          display () {

              var pointA = this.chain.bodyA.position;
              var pointB = this.chain.bodyB.position;

              strokeWeight (3);

              line (pointA.x,pointA.y , pointB.x , pointB.y);

          }
          
}