"use strict";

//#region Math class

    //Advance math class for Vector and Matrix math
    class VMath{
        /**
         * PI * 2
         */
        static tau = Math.PI * 2;
        /**
         * @returns 3D Vector of all one
         */
        static oneV3() {
            return [1,1,1];
        }
        /**
         * @returns 3D Vector of all zero
         */
        static zeroV3() {
            return [0,0,0];
        }
        /**
         * @returns right unit 3D Vector
         */
        static rightV3() {
            return [1, 0, 0];
        }
        /**
         * @returns left unit 3D Vector
         */
        static leftV3() {
            return [-1, 0, 0];
        }
        /**
         * @returns up unit 3D Vector
         */
        static upV3() {
            return [0, 1, 0];
        }
        /**
         * @returns down unit 3D Vector
         */
        static downV3() {
            return [0, -1, 0];
        }
        /**
         * @returns forward unit 3D Vector
         */
        static forwardV3() {
            return [0, 0, 1];
        }
        /**
         * @returns back unit 3D Vector
         */
        static backV3() {
            return [0, 0, -1];
        }
        /**
         * @param {*} val scalar
         * @returns oneV3() * scalar
         */
        static uniformV3(val){
            return [val, val, val];
        }
        /**
         * Convert degree to radian
         * @returns multiplier
         */
        static degToRad(){
            return Math.PI / 180;
        }
        /**
         * Convert radian to degree
         * @returns multiplier 
         */
        static radToDeg(){
            return 180 / Math.PI;
        }
        /**
         * Creates a random color
         * @returns an array of value representing: [R, G, B], Range: [0, 255]
         */
        static randCol(){
            let col = [0,0,0];
            for(let i = 0; i < 3; i++){
                let val = Math.random();
                val *= 255;
                val = Math.floor(val);
                col[i] = val;
            }
            return col;
        }
        /**
         * Creates a rgb style string from RGB Value of a color
         * @param {*} r Red, Range: [0, 255]
         * @param {*} g Green, Range: [0, 255]
         * @param {*} b Blue, Range: [0, 255]
         * @returns RGB String for CSS Style
         */
        static rgbToStyle(r, g, b){
            return "rgb(" + r + " " + g + " " + b + ")";
        }
        /**
         * Creates a rgb style string from a RGB Vector
         * @param {*} v an array representing a RGB Color in [R, G, B]
         * @returns RGB String for CSS Style
         */
        static vect3rgbToStyle(v){
            return "rgb(" + v[0] + " " + v[1] + " " + v[2] + ")";
        }
        /**
         * Clamp a value within min and max
         * @param {*} v Value to clamp
         * @param {*} min Minimum Value
         * @param {*} max Maximum Value
         * @returns Value that's >= min and <= max
         */
        static clamp(v, min, max){
            if (v < min)
                return min;
            else if (v > max)
                return max;
            return v;
        }
        /**
         * Returns a random value from min to max
         * @param {*} min Minimum random value
         * @param {*} max Maximum random value
         * @returns Random Value that's >= min and <= max
         */
        static randRange(min, max){
            return Math.random() * (max - min) + min;
        }
        /**
         * Returns a random integer value from min to max
         * @param {*} min Minimum random value
         * @param {*} max Maximum random value
         * @returns Random integer Value that's >= min and <= max
         */
        static randRangeInt(min, max){
            return Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        /**
         * Calculate the magnitude of a 2D vector
         * @param {*} v a 2D Vector
         * @returns magnitude of v
         */
        static length2D(v){
            return Math.sqrt(v[0]*v[0] + v[1]*v[1]);
        }
        /**
         * Create another copy of a 2D Vector
         * @param {*} v a 2D Vector to copy
         * @returns a new copy of v
         */
        static copy2D(v){
            return [v[0], v[1]];
        }
        /**
         * Create another copy of a 3D Vector
         * @param {*} v a 3D Vector to copy
         * @returns a new copy of v
         */
        static copy3D(v){
            return [v[0], v[1], v[2]];
        }
        /**
         * Calculate the magnitude of a 3D vector
         * @param {*} v a 3D Vector
         * @returns magnitude of v
         */
        static length3D(v){
            return Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
        }
        /**
         * Normalize a 2D Vector
         * @param {*} v 2D Vector to be normalize
         * @returns Normalized v
         */
        static normal2D(v){
            let len = VMath.length2D(v);
            return [v[0]/len, v[1]/len];
        }
        /**
         * Normalize a 3D Vector
         * @param {*} v 3D Vector to be normalize
         * @returns Normalized v
         */
        static normal3D(v){
            let len = VMath.length3D(v);
            return [v[0]/len, v[1]/len, v[2]/len];
        }
        /**
         * Add 2D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 2D Vector
         */
        static add2D(a, b){
            let res = [a[0] + b[0],
                       a[1] + b[1]];
            return res;
        }
        /**
         * Add 3D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 3D Vector
         */
        static add3D(a, b){
            let res = [a[0] + b[0],
                       a[1] + b[1],
                       a[2] + b[2]];
            return res;
        }
        /**
         * Subtract 2D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 2D Vector
         */
        static sub3D(a, b){
            let res = [a[0] - b[0],
                       a[1] - b[1],
                       a[2] - b[2]];
            return res;
        }
        /**
         * Multiply 2D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 2D Vector
         */
        static multi2D(a, scaler){
            let res = [a[0] * scaler,
                       a[1] * scaler];
            return res;
        }
        /**
         * Multiply 3D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 3D Vector
         */
        static multi3D(a, scaler){
            let res = [a[0] * scaler,
                       a[1] * scaler,
                       a[2] * scaler];
            return res;
        }
        /**
         * Dot Product of 3D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns The Dot Product
         */
        static dot3D(a, b){
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        /**
         * Cross Product of 3D Vectors
         * @param {*} a left operand
         * @param {*} b right operand
         * @returns New 3D Vector that's the cross product of a and b
         */
        static cross3D(a, b){
            return [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
        }
        /**
         * Calculates the shortest distance from a 3D point to a 3D plane
         * @param {*} planePt Any 3D position on the plane
         * @param {*} planeN 3D Normal of the plane
         * @param {*} v 3D position to compare with
         * @returns the distance from v to the plane
         */
        static pointToPlaneDist(planePt, planeN, v){
            return this.dot3D(v, planeN) - this.dot3D(planePt, planeN);
        }
        /**
         * Gets the intersection point between a 3D line and a 3D plane
         * @param {*} plantPt Any 3D position on the plane
         * @param {*} planeN 3D Normal of the plane
         * @param {*} start 3D position of the Start of the line
         * @param {*} end 3D position of the end of the line
         * @returns 3D position of the intersection between the plane and the infinitly extended line
         */
        static lineIntersectPlane(plantPt, planeN, start, end){
            let ad = this.dot3D(start, planeN);
            let bd = this.dot3D(end, planeN);
            let t = (this.dot3D(plantPt, planeN) - ad) / (bd - ad);
            return [(end[0] - start[0]) * t + start[0], (end[1] - start[1]) * t + start[1], (end[2] - start[2]) * t + start[2]];
        }
        /**
         * Clips a triangle using a plane
         * @param {*} planePt Any 3D position on the plane
         * @param {*} planeN 3D Normal of the plane
         * @param {*} triIn Test Triangle to clip, array of 3 positions
         * @param {*} triOut Triangle after the clip, array of 3 positions
         * @param {*} triOut2 Extra Triangle after the clip, array of 3 positions
         * @returns -1 delete test triangle, 0 no clipping, 1 update test triangle, 2 two new triangles to replace the test one
         */
        static clipTris(planePt, planeN, triIn, triOut, triOut2){
            let outList = [];
            let inList = [];
            for(let i = 0; i < 3; i++){
                if (this.pointToPlaneDist(planePt, planeN, triIn[i]) < 0)
                    outList.push(triIn[i]);
                else
                    inList.push(triIn[i]);
            }
            let inCount = inList.length;
            if (inCount == 0)
                return -1;
            else if (inCount == 1){
                triOut[0] = [inList[0][0], inList[0][1], inList[0][2]];
                triOut[1] = this.lineIntersectPlane(planePt, planeN, inList[0], outList[0]);
                triOut[2] = this.lineIntersectPlane(planePt, planeN, inList[0], outList[1]);
                return 1;
            }
            else if (inCount == 2){
                triOut[0] = [inList[0][0], inList[0][1], inList[0][2]];
                triOut[1] = [inList[1][0], inList[1][1], inList[1][2]];
                triOut[2] = this.lineIntersectPlane(planePt, planeN, inList[0], outList[0]);
                triOut2[0] = [inList[1][0], inList[1][1], inList[1][2]];
                triOut2[1] = [triOut[2][0], triOut[2][1], triOut[2][2]];
                triOut2[2] = this.lineIntersectPlane(planePt, planeN, inList[1], outList[0]);
                return 2;
            }
            else{
                return 0;
            }
        }

        /* Matrix array order
            0  1  2  3
            4  5  6  7
            8  9 10 11
            12 13 14 15
        */
        
        /**
         * Make a new 4x4 identity matrix
         * @returns 4x4 Identity Matrix
         */
        static identityMat(){
            return [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1];
        }
        /**
         * 4x4 Matrix muliplication
         * @param {*} a Left operand
         * @param {*} b Right operand
         * @returns a new 4x4 matrix
         */
        static mat4MultiMat4(a, b){
            return [a[0]*b[0]+a[1]*b[4]+a[2]*b[8]+a[3]*b[12], a[0]*b[1]+a[1]*b[5]+a[2]*b[9]+a[3]*b[13], a[0]*b[2]+a[1]*b[6]+a[2]*b[10]+a[3]*b[14], a[0]*b[3]+a[1]*b[7]+a[2]*b[11]+a[3]*b[15],
                    a[4]*b[0]+a[5]*b[4]+a[6]*b[8]+a[7]*b[12], a[4]*b[1]+a[5]*b[5]+a[6]*b[9]+a[7]*b[13], a[4]*b[2]+a[5]*b[6]+a[6]*b[10]+a[7]*b[14], a[4]*b[3]+a[5]*b[7]+a[6]*b[11]+a[7]*b[15],
                    a[8]*b[0]+a[9]*b[4]+a[10]*b[8]+a[11]*b[12], a[8]*b[1]+a[9]*b[5]+a[10]*b[9]+a[11]*b[13], a[8]*b[2]+a[9]*b[6]+a[10]*b[10]+a[11]*b[14], a[8]*b[3]+a[9]*b[7]+a[10]*b[11]+a[11]*b[15], 
                    a[12]*b[0]+a[13]*b[4]+a[14]*b[8]+a[15]*b[12], a[12]*b[1]+a[13]*b[5]+a[14]*b[9]+a[15]*b[13], a[12]*b[2]+a[13]*b[6]+a[14]*b[10]+a[15]*b[14], a[12]*b[3]+a[13]*b[7]+a[14]*b[11]+a[15]*b[15]];
        }
        /**
         * Transform a 4D Vector with a 4x4 matrix
         * @param {*} m 4x4 Matrix
         * @param {*} v 4D Vector
         * @returns a new transformed 4D Vector
         */
        static mat4MultiVec4(m, v){
            return [m[0]*v[0]+m[1]*v[1]+m[2]*v[2]+m[3]*v[3], 
                    m[4]*v[0]+m[5]*v[1]+m[6]*v[2]+m[7]*v[3],
                    m[8]*v[0]+m[9]*v[1]+m[10]*v[2]+m[11]*v[3],
                    m[12]*v[0]+m[13]*v[1]+m[14]*v[2]+m[15]*v[3]];
        }
        /**
         * Transposes a 4x4 Matrix
         * @param {*} m 4x4 Matrix
         * @returns a new 4x4 Matrix
         */
        static transposeMat(m){
            return [m[0],m[4],m[8],m[12],
                    m[1],m[5],m[9],m[13],
                    m[2],m[6],m[10],m[14],
                    m[3],m[7],m[11],m[15]];
        }
        /**
         * Gets the right basis vector of a Matrix
         * @param {*} mat 4x4 Matrix
         * @returns a new Right 3D basis Vector of mat
         */
        static matRight(mat){
            return [mat[0], mat[4], mat[8]];
        }
        /**
         * Gets the up basis vector of a Matrix
         * @param {*} mat 4x4 Matrix
         * @returns a new Up 3D basis Vector of mat
         */
        static matUp(mat){
            return [mat[1], mat[5], mat[9]];
        }
    
        /**
         * Gets the forward basis vector of a Matrix
         * @param {*} mat 4x4 Matrix
         * @returns a new Forward 3D basis Vector of mat
         */
        static matforward(mat){
            return [mat[2], mat[6], mat[10]];
        }
        /**
         * Break every quad in an array of polygons into triangles, push extra triangles back to the array
         * @param {*} polygons an array of polygons that may contains triangles (3 Position array) or quad (4 Positoin array)
         */
        static polysToTris(polygons){
            for(let i = 0; i < polygons.length; i++){
                let prim = polygons[i];
                if (prim.length > 3){
                    let last = prim[3];
                    prim.pop();
                    polygons.push([prim[2], last, prim[0]]);
                }
            }
        }
    }
    //Class def for Quaterinon
    class Quat{
        //Quat coefficent
        w;
        i;
        j;
        k;
        constructor(_w, _i, _j, _k){
            this.w = _w;
            this.i = _i;
            this.j = _j;
            this.k = _k;
        }
        /**
         * Makes a quaterinion that rotates along an axis for rad radian
         * @param {*} axis World Axis of rotation
         * @param {*} rad Rotation amount in radian
         * @returns a new Quaterinion that represents the rotation
         */
        static makeQuat(axis, rad){
            let cosVal = Math.cos(rad / 2);
            let sinVal = Math.sin(rad / 2);
            let q = new Quat(cosVal, sinVal * axis[0], sinVal * axis[1], sinVal * axis[2]);
            return q;
        }
        /**
         * Rotates a vector along an axis for rad radian
         * @param {*} axis World Axis of rotation
         * @param {*} rad Rotation amount in radian
         * @param {*} v 3D Vector to be rotated
         * @returns a new Rotated 3D Vector
         */
        static rotateVecAlongAxis(axis, rad, v){
            return this.makeQuat(axis, rad).multiVec3(v);
        }
        /**
         * Makes a quaterinion from euler rotation
         * @param {*} xRad Euler Rotation x in degree
         * @param {*} yRad Euler Rotation y in degree
         * @param {*} zRad Euler Rotation z in degree
         * @returns 
         */
        static fromEuler(xRad, yRad, zRad){
            let q = new Quat(0,0,0,0);
            q.setEuler(xRad, yRad, zRad);
            return q;
        }
        /**
         * Identity quaterinion, no Rotation
         * @returns a new Identity quaternion
         */
        static identity(){
            return new Quat(1, 0, 0, 0);
        }
        /**
         * Normalizes this quaterinion
         */
        normalize(){
            let w = this.w;
            let i = this.i;
            let j = this.j;
            let k = this.k;
            let len = Math.sqrt(w*w + i*i + j*j + k*k);
            
            this.w = w / len;
            this.i = i / len;
            this.j = j / len;
            this.k = k / len;
        }
        /**
         * Multiply this quaternion with another quaternion, for rotation composition
         * @param {*} q2 Right operand
         */
        multiQuat(q2){
            let w1 = this.w;
            let x1 = this.i;
            let y1 = this.j;
            let z1 = this.k;
            let w2 = q2.w;
            let x2 = q2.i;
            let y2 = q2.j;
            let z2 = q2.k;
            this.w = w1*w2-x1*x2-y1*y2-z1*z2;
            this.i = y1*z2-z1*y2+w2*x1+w1*x2;
            this.j = z1*x2-x1*z2+w2*y1+w1*y2;
            this.k = x1*y2-y1*x2+w2*z1+w1*z2;
        }
        /**
         * Rotates this quaterinion along a world axis vector by rad radian
         * @param {*} axis World Axis of rotation
         * @param {*} rad Rotation amount in radian
         */
        rotateAlongWorldAxis(axis, rad){
            let worldQuat = Quat.makeQuat(axis, rad);
            worldQuat.multiQuat(this);
            this.w = worldQuat.w;
            this.i = worldQuat.i;
            this.j = worldQuat.j;
            this.k = worldQuat.k;
        }
        /**
         * Rotates this quaterinion along a local axis vector by rad radian
         * @param {*} axis Local Axis of Rotation
         * @param {*} rad Rotation amount in radian
         */
        rotateAlongLocalAxis(axis, rad){
            let localQuat = Quat.makeQuat(axis, rad);
            this.multiQuat(localQuat);
        }
        /**
         * Converts this quaterinion to a rotation matrix
         * @returns a new 4x4 Rotation Matrix
         */
        toMatrix(){
            let r = this.w;
            let i = this.i;
            let j = this.j;
            let k = this.k;
            return [1 - 2 * (j * j + k * k), 2 * (i * j - k * r), 2 * (i * k + j * r), 0,
                    2 * (i * j + k * r), 1 - 2 * (i * i + k * k),2 * (j * k - i * r), 0,
                    2 * (i * k - j * r), 2 * (j * k + i * r), 1 - 2 * (i * i + j * j), 0,
                    0, 0, 0, 1];
        }
        /**
         * Rotates a vector by this quaterinion
         * @param {*} v 3D Vector to be rotated
         * @returns a new Rotated 3D Vector
         */
        multiVec3(v){
            let pureQuat = new Quat(0, v[0], v[1], v[2]);
            let conjugate = new Quat(this.w, -this.i, -this.j, -this.k);
            let result = new Quat(this.w, this.i, this.j, this.k);
            result.multiQuat(pureQuat);
            result.multiQuat(conjugate);
            return [result.i, result.j, result.k];
        }
        
        /**
         * Converts and euler rotation to a quaterinion rotation
         * DON'T Convert quaternion to euler and then convert that euler back to quaternion
         * @param {*} xRad Euler Rotation x in degree
         * @param {*} yRad Euler Rotation y in degree
         * @param {*} zRad Euler Rotation z in degree
         */
        setEuler(xRad, yRad, zRad){
            let cz = Math.cos(zRad * 0.5);
            let sz = Math.sin(zRad * 0.5);
            let cy = Math.cos(yRad * 0.5);
            let sy = Math.sin(yRad * 0.5);
            let cx = Math.cos(xRad * 0.5);
            let sx = Math.sin(xRad * 0.5);
            this.w = cx * cy * cz + sx * sy * sz;
            this.i = sx * cy * cz - cx * sy * sz;
            this.j = cx * sy * cz + sx * cy * sz;
            this.k = cx * cy * sz - sx * sy * cz;
        }
        /**
         * Converts this quaterinion rotation to an euler rotation
         * @returns a new 3D euler rotation of the quaternion
         */
        getEuler(){
            let euler = [0,0,0];
            let w = this.w;
            let i = this.i;
            let j = this.j;
            let k = this.k;
            euler[0]= Math.atan2(2 * (w * i + j * k), 1 - 2 * (i * i + j * j));
            euler[2]= Math.atan2(2 * (w * k + i * j), 1 - 2 * (j * j + k * k));
            euler[1] = 2 * (w * j - k * i);
            if (Math.abs(euler[1]) >= 1){
                if (euler[1] >= 0)
                    euler[1] = Math.PI * 0.5;
                else
                    euler[1] = Math.PI * -0.5;
            }
            else{
                euler[1] = Math.asin(euler[1]);
            }
            return euler;
        }
    }
    //Class def for transform
    class Transform{
        position;
        rotation;
        scale;
        constructor(_pos, _rot, _scl){
            this.position = _pos;
            this.rotation = _rot;
            this.scale = _scl;
        }
        /**
         * Get the Model Matrix, Local To World Transformation
         * @returns 
         */
        getMatrix(){
            let modelMatrix = this.rotation.toMatrix();
            modelMatrix[0] *= this.scale[0];
            modelMatrix[4] *= this.scale[0];
            modelMatrix[8] *= this.scale[0];
        
            modelMatrix[1] *= this.scale[1];
            modelMatrix[5] *= this.scale[1];
            modelMatrix[9] *= this.scale[1];
        
            modelMatrix[2] *= this.scale[2];
            modelMatrix[6] *= this.scale[2];
            modelMatrix[10] *= this.scale[2];
        
            modelMatrix[3] = this.position[0];
            modelMatrix[7] = this.position[1];
            modelMatrix[11] = this.position[2];
        
            return modelMatrix;
        }
        /**
         * Get the view matrix, World to View Transformation
         * @returns 
         */
        getViewMat(){
            let invRot = VMath.transposeMat(this.rotation.toMatrix());
            
            let invX = -this.position[0];
            let invY = -this.position[1];
            let invZ = -this.position[2];
            invRot[3] = invRot[0] * invX + invRot[1] * invY + invRot[2] * invZ;
            invRot[7] = invRot[4] * invX + invRot[5] * invY + invRot[6] * invZ;
            invRot[11] = invRot[8] * invX + invRot[9] * invY + invRot[10] * invZ;
    
            return invRot;
        }
    }
//#endregion

//#region class def
    //Class def for UI Buttons
    class UIButton{
        visible = true;
        position;
        extend;
        backgroundCol;
        foregroundCol;
        text;
        interaction;
        constructor(x, y, w, h, str, backCol, textCol, callback){
            this.position = [x, y];
            this.extend = [w, h];
            this.text = str;
            this.interaction = callback;
            this.backgroundCol = backCol;
            this.foregroundCol = textCol;
        }
        
        //Renders the button on the canvas
        render(ctx){
            if (!this.visible){
                return;
            }
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.fillStyle = VMath.vect3rgbToStyle(this.backgroundCol);
            ctx.rect(this.position[0], this.position[1], this.extend[0], this.extend[1]);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = VMath.vect3rgbToStyle(this.foregroundCol);
            ctx.fillText(this.text, this.position[0], this.position[1] + this.extend[1]);
        }
        
        //Checks if the mouse pointer is on top of this button
        isMouseOver(){
            if (!this.visible){
                return;
            }
            let minX = this.position[0];
            let minY = this.position[1];
            let maxX = minX + this.extend[0];
            let maxY = minY + this.extend[1];
            return mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY;
        }
    }
    //Class def for a primitive
    class Primitive{
        vertex;
        polygons;
        color;
        /**
         * Construct a primitive
         * @param {[][]} vert An array of Vertext Position
         * @param {[][]} poly An array of Polygon's vertex index relative to vert
         * @param {[][]} col An array of RGB value with range of [0, 255]
         */
        constructor(vert, poly, col){
            this.vertex = vert;
            this.polygons = poly;
            this.color = col;
        }
        //To transform and push a single face of a model to drawQueue to draw
        #renderTriangle(drawQueue, triangle, modelViewMat, projX, projY, clipPlanes, sunLight){
            //Start transformation
            let p1 = this.vertex[triangle[0]];
            let p2 = this.vertex[triangle[1]];
            let p3 = this.vertex[triangle[2]];
            
            p1 = [p1[0], p1[1], p1[2], 1];
            p2 = [p2[0], p2[1], p2[2], 1];
            p3 = [p3[0], p3[1], p3[2], 1];
            //Local To View Space
            p1 = VMath.mat4MultiVec4(modelViewMat, p1);
            p2 = VMath.mat4MultiVec4(modelViewMat, p2);
            p3 = VMath.mat4MultiVec4(modelViewMat, p3);
            //Extract face normal in view space
            let sideA = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
            let sideB = [p3[0] - p2[0], p3[1] - p2[1], p3[2] - p2[2]];
            let viewFaceNormal;
            if (clockWiseMode)
                viewFaceNormal = VMath.normal3D(VMath.cross3D(sideA, sideB));
            else
                viewFaceNormal = VMath.normal3D(VMath.cross3D(sideB, sideA));

            //Discard back face
            if (VMath.dot3D(viewFaceNormal, p1) > 0)
                return;
            //Clip Triangle against near plane
            let clippedPrimitves = [[[p1[0], p1[1], p1[2]], [p2[0], p2[1], p2[2]], [p3[0], p3[1], p3[2]]]];
            let outTri = [0,0,0];
            let outTri2 = [0,0,0];
            let zNearPlane = clipPlanes[0];
            let triCount = VMath.clipTris(zNearPlane[0], zNearPlane[1], clippedPrimitves[0], outTri, outTri2);
            if (triCount >= 1){
                clippedPrimitves[0] = outTri;
                if (triCount == 2)
                    clippedPrimitves.push(outTri2);
            }
            else if (triCount < 0){
                return;
            }
            //View to Proj Space
            for(let i = 0; i < clippedPrimitves.length; i++){
                let tri = clippedPrimitves[i];
                tri[0][0] *= projX/tri[0][2];
                tri[0][1] *= projY/tri[0][2];
                tri[1][0] *= projX/tri[1][2];
                tri[1][1] *= projY/tri[1][2];
                tri[2][0] *= projX/tri[2][2];
                tri[2][1] *= projY/tri[2][2];
            }
            //Clip triangle against up down left right plane
            for(let j = 1; j < clipPlanes.length; j++){
                let plane = clipPlanes[j];
                for(let k = clippedPrimitves.length - 1; k >= 0; k--){
                    outTri = [0,0,0];
                    outTri2 = [0,0,0];
                    triCount = VMath.clipTris(plane[0], plane[1], clippedPrimitves[k], outTri, outTri2);
                    if (triCount >= 1){
                        clippedPrimitves[k] = outTri;
                        
                        if (triCount == 2)
                            clippedPrimitves.push(outTri2);
                    }
                    else if (triCount < 0){
                        clippedPrimitves[k] = clippedPrimitves[clippedPrimitves.length - 1];
                        clippedPrimitves.pop();
                    }
                }
            }
            //Pass the triangle to draw queue
            for(let j = 0; j < clippedPrimitves.length; j++){
                let dataSize = 10;
                let drawData = new Array(dataSize);
                let clippedPrim = clippedPrimitves[j];
                let cp1 = clippedPrim[0];
                let cp2 = clippedPrim[1];
                let cp3 = clippedPrim[2];
                //mean z position for sorting faces
                drawData[0] = (cp1[2] + cp2[2] + cp3[2]) / 3;
                
                //Shading
                let diffuse = VMath.clamp(VMath.dot3D(viewFaceNormal, sunLight.direction), 0, 1);
                let ambient = sunLight.ambientStrenght;
                let combine = diffuse + ambient;
                drawData[1] = VMath.clamp(Math.floor(this.color[0] * combine * sunLight.lightColor[0]), 0, 255);
                drawData[2] = VMath.clamp(Math.floor(this.color[1] * combine * sunLight.lightColor[1]), 0, 255);
                drawData[3] = VMath.clamp(Math.floor(this.color[2] * combine * sunLight.lightColor[2]), 0, 255);
                //Proj to screen space then add to draw data
                //Floor to avoid sub pixeling
                drawData[4] = Math.floor((cp1[0] * 0.5 + 0.5) * screenWidth);
                drawData[5] = Math.floor((-cp1[1] * 0.5 + 0.5) * screenHeight);
                drawData[6] = Math.floor((cp2[0] * 0.5 + 0.5) * screenWidth);
                drawData[7] = Math.floor((-cp2[1] * 0.5 + 0.5) * screenHeight);
                drawData[8] = Math.floor((cp3[0] * 0.5 + 0.5) * screenWidth);
                drawData[9] = Math.floor((-cp3[1] * 0.5 + 0.5) * screenHeight);
                drawQueue.push(drawData);
            }
        }

        /**
         * Queue Render every face of this Primitive
         * @param {*} drawQueue a drawing queue
         * @param {*} sunLight Directional light
         * @param {*} clipPlanes Clipping planes
         * @param {*} modelViewMat Local to View Transformation Matrix
         * @param {*} projX Projection Coefficient for X
         * @param {*} projY Projection Coefficient for Y
         */
        renderPrimitive(drawQueue, sunLight, clipPlanes, modelViewMat, projX, projY){
            for(let i = 0; i < this.polygons.length; i++){
                let triangle = this.polygons[i];
                this.#renderTriangle(drawQueue, triangle, modelViewMat, projX, projY, clipPlanes, sunLight);
            }
        }
    }        
    //Class def for Model
    class Model{
        primitive;
        /**
         * Construct a model with multiple primitives
         * @param {[]} primitiveList array of primitive to render
         */
        constructor(primitiveList){
            this.primitive = primitiveList;
        }
        /**
         * Queue Render this model
         * @param {*} drawQueue a drawing queue
         * @param {*} sunLight Directional light
         * @param {*} clipPlanes Clipping planes
         * @param {*} modelViewMat Local to View Transformation Matrix
         * @param {*} projX Projection Coefficient for X
         * @param {*} projY Projection Coefficient for Y
         */
        render(drawQueue, sunLight, clipPlanes, modelViewMat, projX, projY){
            for(let j = 0; j < this.primitive.length; j++){
                let prim = this.primitive[j];
                prim.renderPrimitive(drawQueue, sunLight, clipPlanes, modelViewMat, projX, projY);
            }
        }
    }
    //Class def for Entity
    class Entity extends Transform{
        visible = true;
        model;

        /**
         * Constructor of an Entity
         * @param {*} _model Model object to be render
         * @param {*} _pos Position of the Entity
         * @param {*} _rot Rotation of the Entity
         * @param {*} _scl Scale of the Entity
         */
        constructor(_model, _pos, _rot, _scl){
            super(_pos, _rot, _scl);
            this.model = _model;
        }
        /**
         * Queue Render this entity
         * @param {*} drawQueue a drawing queue
         * @param {*} sunLight Directional light
         * @param {*} clipPlanes Clipping planes
         * @param {*} viewMat View Matrix
         * @param {*} projX Projection Coefficient for X
         * @param {*} projY Projection Coefficient for Y
         * @returns 
         */
        render(drawQueue, sunLight, clipPlanes, viewMat, projX, projY){
            if (!this.visible){
                return;
            }
            let modelMat = this.getMatrix();
            let modelViewMat = VMath.mat4MultiMat4(viewMat, modelMat);
            this.model.render(drawQueue, sunLight, clipPlanes, modelViewMat, projX, projY);
        }
    }
    //Class def for Camera
    class Camera extends Transform{
        fov = 90;
        zNear = 1;

        /**
         * Constructor for a Camera
         * @param {*} _fov Field Of View in Degree
         * @param {*} _pos Position of the camera
         * @param {*} _rot Rotation of the camera
         * @param {*} _zNear Z Near plane distance to the camera
         */
        constructor(_fov, _pos, _rot, _zNear){
            super(_pos, _rot, VMath.oneV3());
            this.fov = _fov;
            this.zNear = _zNear;
        }
    }
    //Class def for diractional light
    class DirectLight{
        direction;
        ambientStrenght;
        lightColor;

        /**
         * Constructor for a Directional Light
         * @param {*} dir Direction of the light, must be normalized Vector
         * @param {*} ambient the ambient light strenght
         * @param {*} col 3D RGB Vector Color, Range: [0, 255]
         */
        constructor(dir, ambient, col){
            this.direction = dir;
            this.ambientStrenght = ambient;
            this.lightColor = col;
        }
    }
//#endregion

//#region System Variables
let ctx;
let lastTime = Date.now();
let lastDrawTime = Date.now();
let totalTime = 0;
let updateInterval = 0;
let screenWidth = 0;
let screenHeight = 0;
let clearColor = [161, 197, 255];
let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let deltaMouseX = 0;
let deltaMouseY = 0;
let keyMaps = new Map();
let mouseClicked = [false, false, false];
let polyCount = 0;
let changeColorThreshold = 10;
let renderList = [];
let uiList = [];
let sun = new DirectLight([-0.577350269, -0.577350269, 0.577350269], 0.35, [255, 255, 255]);
let stop = false;
let showDebugText = false;

/**
 * True if Face is in Clock Wise Direction, False if Face is in Counter Clock Wise Direction
 */
let clockWiseMode = true;

let cam = new Camera(60, [0, 0, 0], Quat.identity(), 0.1);
//#endregion

//#region Key/Mouse Event Functions
    /**
     * Check if a key is pressed and not holding
     * @param {*} key the key in lowercase
     * @returns True if it's pressed, false otherwise
     */
    function isPressed(key){
        return keyMaps.get(key) === 1;
    }
    /**
     * Check if a key is being held
     * @param {*} key the key in lowercase
     * @returns True if it's be held, false otherwise
     */
    function isHolding(key){
        let state = keyMaps.get(key);
        return state === 1 || state === 2;
    }
    /**
     * Check if a key is holding or pressed previously and then Released
     * @param {*} key the key in lowercase
     * @returns True if it's released, false otherwise
     */
    function isReleased(key){
        return keyMaps.get(key) === 3;
    }
    /**
     * Check if a key is up, not pressed, not held, not released
     * @param {*} key the key in lowercase
     * @returns True if it's upped, false otherwise
     */
    function isKeyUp(key){
        let state = keyMaps.get(key);
        return state == null || state == 0;
    }
    //To update the key states every frame, 0: key up, 1: pressed, 2: holding, 3: released
    function updateKeyStates(value, key, map){
        if (value === 1){
            map.set(key, 2);
        }else if (value === 3){
            map.set(key, 0);
        }
    }
    //To handle key down event
    function keyDownEvent(event){
        let key = event.key.toLowerCase();
        let state = keyMaps.get(key);
        if (state === undefined || state === 0){
            keyMaps.set(key, 1);
        }
    }
    //To handle key up event
    function keyUpEvent(event){
        keyMaps.set(event.key.toLowerCase(), 3);
    }
    //To handle mouse move event
    function mouseMoveEvent(event){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
    //To handle mouse down event
    function mouseDownEvent(event){
        mouseClicked[event.button] = true;
    }
    //To handle mouse up event
    function mouseUpEvent(event){
        mouseClicked[event.button] = false;
    }

    /**
     * Check if a mouse button is being held
     * @param {*} mouseButton the mouse button, 0 = left mouse button, 1 = right mouse button, 2 = scroll wheel
     * @returns True if is being held, false otherwise
     */
    function isMouseDown(mouseButton){
        if (mouseButton < 0 || mouseButton > mouseClicked.length)
            return false;
        return mouseClicked[mouseButton];
    }

    /**
     * Check if a mouse button is up
     * @param {*} mouseButton the mouse button, 0 = left mouse button, 1 = right mouse button, 2 = scroll wheel
     * @returns True if is upped, false otherwise
     */
    function isMouseUp(mouseButton){
        return !isMouseDown(mouseButton);
    }
//#endregion

//#region System Functions
    /**
     * Change Font Size
     * @param {*} size font size in pixel
     */
    function changeFontSize(size){
        ctx.font = size + "px sanserif";
    }
    /**
     * Remove an item from the array, won't preserve order
     * @param {*} list the array to remove from
     * @param {*} index the index of the item to be removed
     */
    function removeFrom(list, index){
        list[index] = list[list.length - 1];
        list.pop();
    }

    function drawText(str, x, y){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.fillText(str, x, y);
    }

    //Setup Function for the system
    function setUp(canvas){
        ctx = canvas.getContext("2d",{ alpha: false });
        changeFontSize(20);
        screenWidth = ctx.canvas.width;
        screenHeight = ctx.canvas.height;
        document.body.addEventListener("keydown", keyDownEvent);
        document.body.addEventListener("keyup", keyUpEvent);
        document.body.addEventListener("mousemove", mouseMoveEvent);
        document.body.addEventListener("mousedown", mouseDownEvent);
        document.body.addEventListener("mouseup", mouseUpEvent);
        gameSetup();
        setTimeout(update, updateInterval);
        window.requestAnimationFrame(drawUpdate);
    }
    //sorting function for face sorting
    function zSortCompare(a, b){
        return b[0] - a[0];
    }
    //Return the sqaure difference of two vector/color
    function sqrDif(dx, dy, dz){
        return dx * dx + dy * dy + dz * dz;
    }
    //Drawing the scene only
    function drawScene(){
        let halfFov = cam.fov * Math.PI / 360;
        let aspectRatio = screenWidth / screenHeight;
        let projXCoefficent = cam.zNear / (Math.tan(halfFov)*cam.zNear);
        let projYCoefficent = projXCoefficent * aspectRatio;
        let viewMat = cam.getViewMat();
        //Transform the sun direction to view space for shading calcucation
        let viewSunDir = [-sun.direction[0], -sun.direction[1], -sun.direction[2], 0];
        viewSunDir = VMath.mat4MultiVec4(viewMat, viewSunDir);
        let normalSunColor = [sun.lightColor[0] / 255, sun.lightColor[1] / 255, sun.lightColor[2] / 255];
        let sunLight = new DirectLight(viewSunDir, sun.ambientStrenght, normalSunColor);
        //queue for triangles [mean z, r, g, b, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y] to draw
        let drawQueue = [];
        //Clipping planes plane[0] plane's origin, plane[1] plane's normal
        let clipPlanes = [[[0,0,cam.zNear], [0,0,1]],
                        [[1,0,0],[-1,0,0]],
                        [[-1,0,0],[1,0,0]],
                        [[0,1,0],[0,-1,0]],
                        [[0,-1,0],[0,1,0]]];
        for(let i = 0; i < renderList.length; i++){
            renderList[i].render(drawQueue, sunLight, clipPlanes, viewMat, projXCoefficent, projYCoefficent);
        }
        drawQueue.sort(zSortCompare);
        polyCount = drawQueue.length;
        let lastColor = [0, 10000, 10000, 10000];
        ctx.beginPath();
        for(let i = 0; i < polyCount; i++){
            let data = drawQueue[i];
            
            if (sqrDif(lastColor[1] - data[1], lastColor[2] - data[2], lastColor[3] - data[3]) > changeColorThreshold){
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = VMath.rgbToStyle(data[1], data[2], data[3]);
                lastColor = data;
            }
            ctx.moveTo(data[4], data[5]);
            for(let i = 6; i < data.length; i+=2){
                ctx.lineTo(data[i], data[i+1]);
            }
        }
        ctx.fill();
    }
    //UI Draw function
    function drawUI(){
        for(let i = 0; i < uiList.length; i++){
            uiList[i].render(ctx);
        }
        gameDrawUI();
        if (showDebugText){
            ctx.fillStyle = "black";
            
            ctx.beginPath();
            let nowTime = Date.now();
            let drawInterval = nowTime - lastDrawTime;
            drawInterval /= 1000.0;
            lastDrawTime = nowTime;
            //Draw FPS
            ctx.fillText("FPS " + Math.floor(1.0 / drawInterval), 10, 20);
            //Draw Cam Pos
            ctx.fillText("Position: " + Math.floor(cam.position[0]) + ", " + Math.floor(cam.position[1]) + ", " + Math.floor(cam.position[2]), 10, 40);
            //Draw Cam Rot
            let eulerRot = cam.rotation.getEuler();
            ctx.fillText("Rotation: " + Math.floor(eulerRot[0] * 180 / Math.PI) + ", " + Math.floor(eulerRot[1] * 180 / Math.PI), 10, 60);
            //Draw Poly Count
            ctx.fillText("Poly Count: " + polyCount, 10, 80);
        }
    }
    //Draw function
    function drawUpdate(){
        ctx.fillStyle = VMath.rgbToStyle(clearColor[0], clearColor[1], clearColor[2]);
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.fillRect(0, 0, screenWidth, screenHeight);
        drawScene();
        drawUI();
        window.requestAnimationFrame(drawUpdate);
    }
    //Update function for UI updates
    function uiUpdate(delta){
        if (!mouseClicked[0]){
            return;
        }
        for(let i = uiList.length - 1; i >= 0; i--){
            let uiElement = uiList[i];
            if (uiElement.isMouseOver()){
                uiElement.interaction();
                return;
            }
        }
    }
    //System update function to update mouse states, keyboard states, times, delta, and calling game update
    function update(){
        let now = Date.now();
        let delta = (now - lastTime);
        lastTime = now;
        deltaMouseX = mouseX - lastMouseX;
        deltaMouseY = mouseY - lastMouseY;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        delta /= 1000.0;
        totalTime += delta;
        if (!stop){
            uiUpdate(delta);
            gameUpdate(delta);
        }
        keyMaps.forEach(updateKeyStates);
        setTimeout(update, updateInterval);
        
    }

    /**
     * Create and start a canvas
     * @param {*} canvasID The ID of the canvas
     * @param {*} element The HTML Element to add the canvas to
     * @param {*} width The width of the canvas
     * @param {*} height The Height of the canvas
     * @returns Canvas Object
     */
    function createCanvas(canvasID, element, width, height){
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.id = canvasID;
        element.appendChild(canvas);
        setUp(canvas);

        return canvas;
    }

    /**
     * Change the size of the canvas
     * @param {*} newWidth New Width in Pixel
     * @param {*} newHeight New Height in Pixel
     */
    function setCanvasSize(newWidth, newHeight){
        ctx.canvas.width = newWidth;
        ctx.canvas.height = newHeight;
        screenWidth = newWidth;
        screenHeight = newHeight;
    }

//#endregion